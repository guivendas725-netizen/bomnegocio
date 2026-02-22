// ================================
// SELEÇÃO DE ELEMENTOS DO DOM
// ================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const faqTriggers = document.querySelectorAll('.faq-trigger');

// ================================
// NAVBAR - DETECÇÃO DE SCROLL
// ================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================================
// MOBILE MENU - TOGGLE
// ================================
menuToggle.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  iconMenu.classList.toggle('hidden', !isHidden);
  iconClose.classList.toggle('hidden', isHidden);
});

// ================================
// MOBILE MENU - FECHAR AO CLICAR EM LINK
// ================================
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  });
});

// ================================
// NAVBAR ATIVA - SIMULAÇÃO REACT NAVLINK
// ================================
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Se o scroll estiver dentro da seção (com margem de 100px)
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ================================
// FAQ - TOGGLE DOS ITENS
// ================================
faqTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parent = trigger.parentElement;
    
    // Fecha outros abertos ao abrir um novo
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});