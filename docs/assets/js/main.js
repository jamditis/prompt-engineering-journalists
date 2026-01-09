/**
 * Main JavaScript for MOOC course site
 * Progressive enhancement - site works without JS
 */

(function () {
  'use strict';

  // Dark/light mode toggle
  function initTheme() {
    const toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;

    const getPreferred = () => {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    };

    setTheme(getPreferred());

    toggle.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme;
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Copy-to-clipboard for code blocks
  function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre > code');
    if (!codeBlocks.length) return;

    const copyText = async (text, button) => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        button.textContent = 'Copied!';
        setTimeout(() => { button.textContent = 'Copy'; }, 2000);
      } catch (err) {
        button.textContent = 'Failed';
        setTimeout(() => { button.textContent = 'Copy'; }, 2000);
      }
    };

    codeBlocks.forEach((code) => {
      const pre = code.parentElement;
      pre.style.position = 'relative';

      const button = document.createElement('button');
      button.className = 'copy-btn';
      button.textContent = 'Copy';
      button.type = 'button';
      button.setAttribute('aria-label', 'Copy code to clipboard');

      button.addEventListener('click', () => copyText(code.textContent, button));
      pre.appendChild(button);
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  }

  // Mobile nav toggle
  function initMobileNav() {
    const navToggle = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-nav]');
    if (!navToggle || !nav) return;

    const closeNav = () => {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    const openNav = () => {
      document.body.classList.add('nav-open');
      navToggle.setAttribute('aria-expanded', 'true');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.contains('nav-open');
      isOpen ? closeNav() : openNav();
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeNav();
      }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('nav-open') &&
          !nav.contains(e.target) &&
          !navToggle.contains(e.target)) {
        closeNav();
      }
    });
  }

  // Initialize all features
  function init() {
    initTheme();
    initCodeCopy();
    initSmoothScroll();
    initMobileNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
