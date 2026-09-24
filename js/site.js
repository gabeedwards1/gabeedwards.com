// Shared behavior for every page. Loaded with `defer`, so the DOM is parsed
// and any deferred libraries above it (e.g. AOS) have already run.

// current year
document.getElementById('year').textContent = new Date().getFullYear();

// accessible mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

// smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// scroll reveals (only pages that load AOS)
if (window.AOS) AOS.init({ once: true, duration: 600 });
