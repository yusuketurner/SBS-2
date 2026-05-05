/* ========================================
   山陰物流サービス｜共通スクリプト common.js
======================================== */

// 1. Header scroll behavior (TOPページ用)
const header = document.querySelector('.l-header');
if (header && header.classList.contains('l-header--top')) {
  const handleScroll = () => {
    if (window.scrollY > 80) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Scroll Reveal (Intersection Observer)
const reveals = document.querySelectorAll('.js-reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// 3. Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

// 4. Mobile menu toggle
const menuBtn = document.querySelector('.p-header__menu-btn');
const headerNav = document.querySelector('.p-header__nav');
if (menuBtn && headerNav) {
  menuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('is-open');
    menuBtn.classList.toggle('is-active');
  });
}
