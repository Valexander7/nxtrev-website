// NXTREV motion layer. Native scroll + rAF, no library.
// Each effect checks for its own markup, so one file serves every page.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktop = window.matchMedia('(min-width: 1024px)');
  function clamp(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }

  function heroVideo() {
    var video = document.getElementById('hero-video');
    if (!video) return;
    var source = video.querySelector('source');
    var loaded = false;
    var inView = true;

    function stop() {
      video.classList.remove('is-playing');
      video.pause();
      video.hidden = true;
    }

    function sync() {
      if (!desktop.matches || reduce.matches || document.hidden || !inView ||
          (navigator.connection && navigator.connection.saveData)) {
        stop();
        return;
      }
      video.hidden = false;
      if (!loaded) {
        source.src = source.getAttribute('data-src');
        loaded = true;
        video.load();
      }
      var playback = video.play();
      if (playback && playback.catch) playback.catch(stop);
    }

    video.addEventListener('playing', function () { video.classList.add('is-playing'); });
    video.addEventListener('error', stop);
    source.addEventListener('error', stop);
    document.addEventListener('visibilitychange', sync);
    desktop.addEventListener('change', sync);
    reduce.addEventListener('change', sync);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        sync();
      }).observe(video.parentNode);
    }
    if (document.readyState === 'complete') sync();
    else window.addEventListener('load', sync, { once: true });
  }

  // One shared rAF loop for every scroll-linked effect.
  var tasks = [];
  var ticking = false;
  function frame() { ticking = false; for (var i = 0; i < tasks.length; i++) tasks[i](); }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });

  // ---- Statement: split into words, light them in reading order ----
  function statement() {
    var el = document.querySelector('.stmt-text');
    if (!el) return;
    var words = [];
    (function split(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement('span');
            s.className = 'w' + (node.classList && node.classList.contains('stmt-accent') ? ' accent' : '');
            s.textContent = part;
            frag.appendChild(s);
            words.push(s);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) { split(child); }
      });
    })(el);
    tasks.push(function () {
      if (reduce.matches) return;
      var r = el.getBoundingClientRect(), vh = window.innerHeight;
      // Start lighting when the block's top reaches 80% of the viewport, finish when its bottom reaches 50%.
      var p = clamp((vh * 0.8 - r.top) / (r.height + vh * 0.3));
      var n = Math.round(p * words.length);
      for (var i = 0; i < words.length; i++) words[i].classList.toggle('lit', i < n);
    });
  }

  // ---- Stats: fade up and count to the real figure once ----
  function stats() {
    var items = document.querySelectorAll('.stat');
    if (!items.length) return;
    if (!reduce.matches) items[0].parentNode.classList.add('stats-armed');
    function run(item) {
      item.classList.add('in');
      var num = item.querySelector('[data-count]');
      if (!num || reduce.matches) return;
      var target = parseFloat(num.getAttribute('data-count'));
      var suffix = num.getAttribute('data-suffix') || '';
      var t0 = null, dur = 1800;
      function step(t) {
        if (t0 === null) t0 = t;
        var k = clamp((t - t0) / dur);
        var eased = 1 - Math.pow(1 - k, 4);
        num.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
        if (k < 1) requestAnimationFrame(step);
      }
      num.textContent = '0' + suffix;
      requestAnimationFrame(step);
    }
    // Checked on scroll rather than with an observer, so a fast flick past still counts.
    var pending = Array.prototype.slice.call(items);
    tasks.push(function () {
      var vh = window.innerHeight;
      pending = pending.filter(function (item) {
        if (item.getBoundingClientRect().top < vh * 0.85) { run(item); return false; }
        return true;
      });
    });
  }

  // ---- AccoTEST theater: pinned stage, scroll moves through the three platforms ----
  function theater() {
    var pin = document.querySelector('.ate-pin');
    if (!pin || typeof window.atePlatforms !== 'object') return;
    var keys = Object.keys(window.atePlatforms);
    var holder = pin.querySelector('.ate-img-stack');
    var imgs = keys.map(function (k) {
      var img = document.createElement('img');
      img.src = window.atePlatforms[k].image;
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.className = 'drop-shadow-2xl';
      img.decoding = 'async';
      holder.appendChild(img);
      return img;
    });
    var current = null;
    var on = false;

    function update() {
      if (!on) return;
      var r = pin.getBoundingClientRect();
      var range = (pin.offsetHeight - window.innerHeight) || 1;
      var q = clamp(-r.top / range);
      pin.style.setProperty('--q', q.toFixed(4));
      var n = keys.length;
      for (var i = 0; i < n; i++) {
        var d = (q - (i + 0.5) / n) * n;             // -1.5 .. 1.5, 0 = this platform centred
        if (i === 0 && d < 0) d = 0;                  // first platform is already on stage at the start
        if (i === n - 1 && d > 0) d = 0;              // last one stays at the end
        var a = Math.abs(d);
        var o = clamp(1 - (a - 0.2) / 0.55);          // neighbours overlap, so the stage never goes dark
        imgs[i].style.opacity = o.toFixed(3);
        imgs[i].style.transform = 'translate3d(0,' + (-d * 90).toFixed(1) + 'px,0) scale(' + (1 - Math.min(a, 1) * 0.18).toFixed(3) + ')';
        imgs[i].style.filter = a > 0.05 ? 'blur(' + Math.min(a * 10, 10).toFixed(1) + 'px)' : 'none';
      }
      var idx = Math.min(n - 1, Math.floor(q * n));
      if (keys[idx] !== current) {
        current = keys[idx];
        window.switchAtePlatform(current, true);
        var copy = pin.querySelector('.ate-copy');
        copy.classList.remove('swap'); void copy.offsetWidth; copy.classList.add('swap');
      }
    }

    function enable() {
      on = desktop.matches && !reduce.matches;
      pin.classList.toggle('is-theater', on);
      window.ateTheater = on ? function (key) {
        var i = keys.indexOf(key);
        var top = pin.getBoundingClientRect().top + window.scrollY;
        var range = pin.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top + range * ((i + 0.5) / keys.length), behavior: 'smooth' });
      } : null;
      if (on) { current = null; update(); }
      else { imgs.forEach(function (im) { im.style.cssText = ''; }); }
    }
    tasks.push(update);
    enable();
    desktop.addEventListener && desktop.addEventListener('change', enable);
    reduce.addEventListener && reduce.addEventListener('change', enable);
  }

  function init() {
    heroVideo(); statement(); stats(); theater();
    request();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
