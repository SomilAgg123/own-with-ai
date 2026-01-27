/**
 * Own With AI - Main JavaScript
 */

(function() {
    'use strict';

    // =========================================================================
    // Mobile Navigation Toggle
    // =========================================================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // =========================================================================
    // Process Tabs (How It Works Section)
    // =========================================================================
    const processTabs = document.querySelectorAll('.process-tab');
    const processContents = document.querySelectorAll('.process-content');

    processTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const targetId = 'process-' + this.dataset.tab;

            // Update active tab
            processTabs.forEach(function(t) {
                t.classList.remove('active');
            });
            this.classList.add('active');

            // Show target content
            processContents.forEach(function(content) {
                if (content.id === targetId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // =========================================================================
    // Smooth Scroll for Anchor Links
    // =========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================================================================
    // Form Validation Enhancement
    // =========================================================================
    const forms = document.querySelectorAll('.form');

    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');

            if (form.checkValidity()) {
                // Show loading state
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Submitting...';
                }
            }
        });

        // Real-time validation feedback
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(function(input) {
            input.addEventListener('blur', function() {
                if (this.value && !this.checkValidity()) {
                    this.style.borderColor = '#ef4444';
                } else if (this.value && this.checkValidity()) {
                    this.style.borderColor = '#22c55e';
                } else {
                    this.style.borderColor = '';
                }
            });

            input.addEventListener('input', function() {
                if (this.style.borderColor === 'rgb(239, 68, 68)' && this.checkValidity()) {
                    this.style.borderColor = '#22c55e';
                }
            });
        });
    });

    // =========================================================================
    // Navbar Background on Scroll
    // =========================================================================
    const nav = document.querySelector('.nav');

    function updateNavBackground() {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavBackground);
    updateNavBackground();

})();
