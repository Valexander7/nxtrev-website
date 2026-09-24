// Shared page behaviour: navigation menus and scroll reveals.
// Loaded on every page; each part checks for its own markup.
(function () {
  // ---- Mobile menu ----
  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      menu.hidden = open;
      document.getElementById('menuIconOpen').classList.toggle('hidden', !open);
      document.getElementById('menuIconClose').classList.toggle('hidden', open);
    });
  }

  // ---- Products menu (desktop): opens on hover, click or keyboard ----
  var trigger = document.getElementById('productsMenuBtn');
  var panel = document.getElementById('productsMenu');
  if (trigger && panel) {
    var wrap = trigger.parentNode;
    var closeTimer = null;
    function setOpen(open) {
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
    }
    // With a mouse, hovering has already opened the menu, so a click keeps it open.
    // Keyboard (detail 0) and touch clicks toggle it.
    var hoverCapable = window.matchMedia('(hover: hover)').matches;
    trigger.addEventListener('click', function (e) {
      if (hoverCapable && e.detail > 0) { setOpen(true); return; }
      setOpen(trigger.getAttribute('aria-expanded') !== 'true');
    });
    wrap.addEventListener('mouseenter', function () { clearTimeout(closeTimer); setOpen(true); });
    wrap.addEventListener('mouseleave', function () { closeTimer = setTimeout(function () { setOpen(false); }, 120); });
    wrap.addEventListener('focusout', function (e) { if (!wrap.contains(e.relatedTarget)) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') { setOpen(false); trigger.focus(); }
    });
  }

  // ---- Scroll reveals ----
  var reveals = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-revealed'); });
  }
})();
