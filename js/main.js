// =====================
// Navbar: scroll shadow + active section
// =====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');
const sections = document.querySelectorAll('section[id], footer[id]');

function onScroll() {
  // Shadow
  if (window.scrollY > 16) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 80;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.section === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// =====================
// Mobile nav toggle
// =====================
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinksEl.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav on link click
navLinksEl.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =====================
// Abstract toggle
// =====================
document.querySelectorAll('.abstract-toggle').forEach((btn) => {
  const targetId = btn.getAttribute('aria-controls');
  const target = document.getElementById(targetId);

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    target.hidden = expanded;
  });
});

// =====================
// Experience tabs
// =====================
const expTabs = document.querySelectorAll('.exp-tab');
expTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    expTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    document.querySelectorAll('.exp-panel').forEach((panel) => {
      panel.classList.add('hidden');
    });
    const target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) target.classList.remove('hidden');
  });
});

// =====================
// Toolkit language tabs
// =====================
const toolkitTabs = document.querySelectorAll('.toolkit-tab');
toolkitTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    toolkitTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    document.querySelectorAll('.toolkit-panel').forEach((panel) => {
      panel.classList.add('hidden');
    });
    const target = document.getElementById('lang-' + tab.dataset.lang);
    if (target) target.classList.remove('hidden');
  });
});

// =====================
// Scroll fade-in animations
// =====================
const fadeEls = document.querySelectorAll(
  '.pub-card, .timeline-item, .toolkit-card, .teaching-card, .wip-item'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up', 'visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

fadeEls.forEach((el) => {
  el.classList.add('fade-up');
  observer.observe(el);
});
