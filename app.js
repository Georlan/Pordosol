const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const formatWhatsAppLinks = () => {
  document.querySelectorAll('.wa-link[data-message]').forEach((link) => {
    const baseUrl = 'https://wa.me/5588999005560';
    const message = link.dataset.message?.trim();
    link.href = message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
  });
};

formatWhatsAppLinks();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 10);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

document.getElementById('current-year').textContent = new Date().getFullYear();
