(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var yearEl = document.getElementById('year');
  var notifyForm = document.getElementById('notifyForm');
  var notifyMsg = document.getElementById('notifyMsg');
  var notifyEmail = document.getElementById('notifyEmail');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  if (notifyForm) {
    notifyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = (notifyEmail.value || '').trim();
      notifyMsg.classList.remove('error');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        notifyEmail.setAttribute('aria-invalid', 'true');
        notifyMsg.textContent = 'Escribe un correo válido.';
        notifyMsg.classList.add('error');
        return;
      }
      notifyEmail.setAttribute('aria-invalid', 'false');
      notifyMsg.textContent = 'Gracias. Te avisaremos cuando Carnegie esté listo.';
      notifyForm.reset();
    });
  }
})();
