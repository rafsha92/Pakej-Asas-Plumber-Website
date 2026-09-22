document.documentElement.classList.add('js');

const header = document.querySelector('#site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#main-nav');
const navLinks = [...document.querySelectorAll('.nav-link')];
const mobileNavQuery = window.matchMedia('(max-width: 760px)');

const syncNavAccess = () => {
  const closedOnMobile = mobileNavQuery.matches && !nav.classList.contains('open');
  nav.inert = closedOnMobile;
};

const closeNav = () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Buka menu');
  document.body.classList.remove('nav-open');
  syncNavAccess();
};

navToggle.addEventListener('click', () => {
  const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('open', willOpen);
  navToggle.setAttribute('aria-expanded', String(willOpen));
  navToggle.setAttribute('aria-label', willOpen ? 'Tutup menu' : 'Buka menu');
  document.body.classList.toggle('nav-open', willOpen);
  syncNavAccess();
});

navLinks.forEach((link) => link.addEventListener('click', closeNav));
mobileNavQuery.addEventListener('change', () => {
  if (!mobileNavQuery.matches) closeNav();
  else syncNavAccess();
});
window.addEventListener('resize', () => {
  if (!mobileNavQuery.matches) closeNav();
  else syncNavAccess();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeNav();
    navToggle.focus();
  }
});
syncNavAccess();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    const mappedId = id === 'tentang' || id === 'hasil' ? 'servis' : id;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${mappedId}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 32), { passive: true });

document.querySelectorAll('.map-pin').forEach((pin) => {
  pin.addEventListener('click', () => {
    document.querySelector('.map-status').textContent = `${pin.dataset.area} termasuk dalam kawasan liputan kami.`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
