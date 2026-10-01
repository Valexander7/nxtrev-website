// Website chat that ends in an email.
// The visitor answers a few short questions in a chat window; the answers are
// sent to the sales inbox through Web3Forms (same key as the contact form).
// Nobody needs to be online: we reply by email.
(function () {
  var ACCESS_KEY = '66ab2b07-8d7e-4fae-b624-a1466b937641';
  var STORE = 'nxtrev_chat_v1';
  var SALES = 'sales@nxtrev.org';

  var TOPICS = ['Contact fingers', 'Test sockets', 'Pogo / Kelvin pins', 'Load boards', 'AccoTEST testers', 'Something else'];
  var PART_TOPICS = ['Contact fingers', 'Test sockets', 'Pogo / Kelvin pins', 'Load boards'];

  // The page a visitor is on suggests the likely topic.
  var path = location.pathname;
  var pageTopic = /test-sockets/.test(path) ? 'Contact fingers' : /accotest/.test(path) ? 'AccoTEST testers' : '';

  // Each step: the question, the answer key, optional quick replies, and when to skip it.
  var STEPS = [
    { key: 'topic', ask: 'Hi! Tell us what you need and we will reply by email. What can we help with?', chips: TOPICS },
    { key: 'package', ask: 'Which device package is it for? For example TO-247, TSSOP-56 or QFN 5x6.', chips: ['Not sure yet'], skip: skipPackage },
    { key: 'qty', ask: 'Roughly how many pieces do you need?', chips: ['Just a sample', 'Not sure yet'], skip: skipPackage },
    { key: 'details', ask: 'Anything else we should know? A part number, your handler or tester model, or a short description all help.', chips: ['Nothing else'] },
    { key: 'name', ask: 'Thanks. What is your name?' },
    { key: 'company', ask: 'Which company are you with?' },
    { key: 'email', ask: 'And your work email, so we can reply?', type: 'email' }
  ];

  // TODO(human): decide when the package and quantity questions are skipped.
  function skipPackage(a) {
    return PART_TOPICS.indexOf(a.topic) === -1;
  }

  var state = load() || { open: false, answers: {}, log: [], step: 0, sent: false };

  // ---- Build the widget ----
  var launcher = el('button', { type: 'button', class: 'nxc-launch', 'aria-expanded': 'false', 'aria-controls': 'nxc-panel' });
  launcher.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg><span>Chat with us</span>';

  var panel = el('div', { id: 'nxc-panel', class: 'nxc-panel', role: 'dialog', 'aria-label': 'Chat with NXTREV' });
  panel.hidden = true;
  panel.innerHTML =
    '<div class="nxc-head"><div><p class="nxc-title">NXTREV Sales</p><p class="nxc-sub">We reply by email</p></div>' +
    '<div class="nxc-head-actions"><button type="button" class="nxc-icon" data-act="restart" aria-label="Start over">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
    '<button type="button" class="nxc-icon" data-act="close" aria-label="Close chat">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div></div>' +
    '<div class="nxc-log" role="log" aria-live="polite"></div>' +
    '<div class="nxc-chips"></div>' +
    '<form class="nxc-form"><label for="nxc-input" class="nxc-sr">Your reply</label>' +
    '<input id="nxc-input" class="nxc-input" autocomplete="off" placeholder="Type your reply">' +
    '<input type="checkbox" name="botcheck" class="nxc-sr" tabindex="-1" aria-hidden="true">' +
    '<button type="submit" class="nxc-send" aria-label="Send reply"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h14M12 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></form>';

  document.body.appendChild(panel);
  document.body.appendChild(launcher);

  var logEl = panel.querySelector('.nxc-log');
  var chipsEl = panel.querySelector('.nxc-chips');
  var form = panel.querySelector('.nxc-form');
  var input = panel.querySelector('.nxc-input');
  var honeypot = panel.querySelector('[name=botcheck]');

  launcher.addEventListener('click', function () { setOpen(panel.hidden); });
  panel.addEventListener('click', function (e) {
    var act = e.target.closest('[data-act]');
    if (!act) return;
    if (act.dataset.act === 'close') setOpen(false);
    if (act.dataset.act === 'restart') restart();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { setOpen(false); launcher.focus(); }
  });
  // Any link or button with data-chat-open opens the chat (e.g. page CTAs).
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-chat-open]');
    if (!t) return;
    e.preventDefault();
    var topic = t.getAttribute('data-chat-open');
    if (topic && state.step === 0 && !state.log.length) pageTopic = topic;
    setOpen(true);
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    answer(input.value.trim());
  });

  render();
  if (state.open) setOpen(true, true);

  // ---- Conversation ----
  function setOpen(open, quiet) {
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', open ? 'true' : 'false');
    launcher.classList.toggle('is-open', open);
    state.open = open;
    save();
    if (open) {
      if (!state.log.length) ask();
      if (!quiet) setTimeout(function () { input.focus(); }, 50);
      scrollDown();
    }
  }

  function restart() {
    state = { open: true, answers: {}, log: [], step: 0, sent: false };
    render();
    ask();
    input.focus();
  }

  function current() { return STEPS[state.step]; }

  function ask() {
    while (current() && current().skip && current().skip(state.answers)) state.step++;
    var s = current();
    if (!s) return review();
    push('bot', s.ask);
    renderChips();
  }

  function answer(text) {
    if (!text || state.sent) return;
    if (state.step >= STEPS.length) return; // waiting on Send / Edit
    var s = current();
    if (s.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      push('you', text);
      push('bot', 'That email does not look right. Could you check it?');
      input.value = '';
      return;
    }
    state.answers[s.key] = text;
    push('you', text);
    input.value = '';
    state.step++;
    ask();
  }

  function review() {
    var a = state.answers;
    push('bot', 'Here is what we will send to our sales team:\n\n' + summary(a));
    renderChips(['Send', 'Start over']);
  }

  function summary(a) {
    var lines = ['Topic: ' + a.topic];
    if (a['package']) lines.push('Package: ' + a['package']);
    if (a.qty) lines.push('Quantity: ' + a.qty);
    if (a.details) lines.push('Details: ' + a.details);
    lines.push('Name: ' + a.name, 'Company: ' + a.company, 'Email: ' + a.email);
    return lines.join('\n');
  }

  function send() {
    var a = state.answers;
    if (honeypot.checked) return;
    renderChips([]);
    push('bot', 'Sending…');
    var text = summary(a) + '\n\nPage: ' + location.href;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: 'Website chat - ' + a.topic + ' - ' + a.company,
        from_name: 'NXTREV Website Chat',
        replyto: a.email,
        name: a.name, company: a.company, email: a.email,
        topic: a.topic, 'package': a['package'] || '', quantity: a.qty || '',
        message: text,
        botcheck: ''
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) { d && d.success ? done(a) : fallback(text, a); })
      .catch(function () { fallback(text, a); });
  }

  function done(a) {
    state.log.pop();
    logEl.removeChild(logEl.lastChild);
    state.sent = true;
    push('bot', 'Sent. Thank you, ' + a.name.split(' ')[0] + '. We will reply to ' + a.email + '.');
    renderChips(['Start over']);
  }

  function fallback(text, a) {
    state.log.pop();
    logEl.removeChild(logEl.lastChild);
    var href = 'mailto:' + SALES + '?subject=' + encodeURIComponent('Website chat - ' + a.topic) + '&body=' + encodeURIComponent(text);
    push('bot', 'Sorry, that did not go through. You can send the same message by email instead:', href);
    renderChips(['Send', 'Start over']);
  }

  // ---- Rendering ----
  function push(who, text, link) {
    state.log.push({ who: who, text: text, link: link || '' });
    save();
    renderMsg(state.log[state.log.length - 1]);
    scrollDown();
  }

  function renderMsg(m) {
    var b = el('div', { class: 'nxc-msg nxc-' + m.who });
    b.textContent = m.text;
    if (m.link) {
      var a = el('a', { href: m.link, class: 'nxc-link' });
      a.textContent = 'Email ' + SALES;
      b.appendChild(document.createElement('br'));
      b.appendChild(a);
    }
    logEl.appendChild(b);
  }

  function render() {
    logEl.innerHTML = '';
    state.log.forEach(renderMsg);
    if (state.sent) renderChips(['Start over']);
    else if (state.step >= STEPS.length) renderChips(['Send', 'Start over']);
    else renderChips();
  }

  function renderChips(list) {
    var s = current();
    var chips = list || (s && s.chips) || [];
    if (!list && s && s.key === 'topic' && pageTopic) {
      chips = [pageTopic].concat(chips.filter(function (c) { return c !== pageTopic; }));
    }
    chipsEl.innerHTML = '';
    chips.forEach(function (c) {
      var btn = el('button', { type: 'button', class: 'nxc-chip' });
      btn.textContent = c;
      btn.addEventListener('click', function () {
        if (c === 'Send') return send();
        if (c === 'Start over') return restart();
        answer(c);
      });
      chipsEl.appendChild(btn);
    });
    var waiting = state.sent || state.step >= STEPS.length;
    input.disabled = waiting;
    input.type = s && s.type === 'email' ? 'email' : 'text';
    input.placeholder = waiting ? '' : 'Type your reply';
  }

  function scrollDown() { logEl.scrollTop = logEl.scrollHeight; }

  function el(tag, attrs) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(STORE)); } catch (e) { return null; } }
})();
