// Kumquat site: small progressive enhancements. Every page works without this file.
(function () {
  'use strict';
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Theme: system → light → dark → system. Stored only in this browser.
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    var labels = {};
    try { labels = JSON.parse(toggle.getAttribute('data-labels')) || {}; } catch (e) {}
    var base = toggle.getAttribute('aria-label');
    var apply = function (mode) {
      if (mode === 'light' || mode === 'dark') root.dataset.theme = mode;
      else delete root.dataset.theme;
      toggle.dataset.mode = mode;
      toggle.title = base + ': ' + (labels[mode] || mode);
    };
    var saved = 'auto';
    try { saved = localStorage.getItem('kq-theme') || 'auto'; } catch (e) {}
    apply(saved);
    toggle.addEventListener('click', function () {
      var next = { auto: 'light', light: 'dark', dark: 'auto' }[toggle.dataset.mode] || 'auto';
      apply(next);
      try {
        if (next === 'auto') localStorage.removeItem('kq-theme');
        else localStorage.setItem('kq-theme', next);
      } catch (e) {}
    });
  }

  // Hairline under the header once the page scrolls.
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Close the mobile menu after picking a link.
  document.querySelectorAll('.mobile-nav a').forEach(function (a) {
    a.addEventListener('click', function () { a.closest('details').open = false; });
  });

  // Reveal on scroll.
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Scroll demo: the active step drives the stage.
  var stage = document.querySelector('.stage');
  var steps = document.querySelectorAll('.step');
  if (stage && steps.length) {
    var sizeEl = stage.querySelector('[data-size]');
    var from = parseFloat(stage.dataset.from);
    var to = parseFloat(stage.dataset.to);
    var current = from;
    var animateSize = function (target) {
      if (!sizeEl) return;
      if (reduceMotion) { current = target; sizeEl.textContent = target.toFixed(1); return; }
      var start = current, t0 = performance.now();
      var tick = function (now) {
        var p = Math.min(1, (now - t0) / 900);
        var eased = 1 - Math.pow(1 - p, 3);
        current = start + (target - start) * eased;
        sizeEl.textContent = current.toFixed(1);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    var setStep = function (n) {
      if (stage.dataset.step === String(n)) return;
      stage.dataset.step = n;
      steps.forEach(function (s) { s.classList.toggle('is-active', s.dataset.step === String(n)); });
      stage.style.setProperty('--fill', n === 3 ? (to / from * 100) + '%' : '100%');
      animateSize(n === 3 ? to : from);
      stage.querySelectorAll('.seg-hot').forEach(function (el) {
        if (!el.dataset.baseFill) el.dataset.baseFill = el.getAttribute('fill');
        el.setAttribute('fill', n >= 2 ? el.dataset.hotFill : el.dataset.baseFill);
      });
      stage.querySelectorAll('.label-hot').forEach(function (el) { el.classList.toggle('hot', n >= 2); });
    };
    if ('IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setStep(Number(e.target.dataset.step)); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(function (s) { so.observe(s); });
    }
    setStep(1);
  }

  // AI before/after: tabs and slider.
  var tabs = document.querySelectorAll('.ai-tabs [role="tab"]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      var cap = document.querySelector('[data-ai-caption]');
      if (cap) cap.textContent = tab.dataset.caption;
    });
    tab.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var list = Array.prototype.slice.call(tabs);
      var i = list.indexOf(tab) + (e.key === 'ArrowRight' ? 1 : -1);
      var next = list[(i + list.length) % list.length];
      next.focus(); next.click();
    });
  });
  document.querySelectorAll('.ba').forEach(function (ba) {
    var range = ba.querySelector('.ba-range');
    if (!range) return;
    var update = function () { ba.style.setProperty('--pos', range.value + '%'); };
    range.addEventListener('input', update);
    update();
  });

  // Format search and filters.
  var table = document.querySelector('[data-formats]');
  if (table) {
    var input = document.querySelector('[data-formats-search]');
    var chips = document.querySelectorAll('[data-filter]');
    var count = document.querySelector('[data-formats-count]');
    var empty = document.querySelector('[data-formats-empty]');
    var rows = table.querySelectorAll('tbody tr');
    var filter = 'all';
    var run = function () {
      var q = (input.value || '').trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (r) {
        var okText = !q || r.dataset.search.indexOf(q) !== -1;
        var okFilter = filter === 'all' || r.dataset.kind === filter || r.dataset.plan === filter;
        var show = okText && okFilter;
        r.hidden = !show;
        if (show) shown++;
      });
      if (count) count.textContent = count.dataset.template.replace('{n}', shown).replace('{t}', rows.length);
      if (empty) empty.hidden = shown !== 0;
    };
    input.addEventListener('input', run);
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        filter = c.dataset.filter;
        chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c); });
        run();
      });
    });
    run();
  }
})();
