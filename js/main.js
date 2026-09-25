document.addEventListener('DOMContentLoaded', function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mobile nav toggle
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    function closeMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.add('is-active');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden';
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            var isOpen = navMenu.classList.contains('is-active');
            if (isOpen) { closeMenu(); } else { openMenu(); }
        });

        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (event) {
            var isInsideNav = navMenu.contains(event.target);
            var isToggle = navToggle.contains(event.target);
            if (!isInsideNav && !isToggle && navMenu.classList.contains('is-active')) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
                closeMenu();
                navToggle.focus();
            }
        });
    }

    // Smooth scroll for in-page anchors, offset for the fixed header
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') { e.preventDefault(); return; }

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var headerOffset = 88;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: reduceMotion ? 'auto' : 'smooth'
                });
            }
        });
    });

    // Fade-in on scroll (skipped entirely under prefers-reduced-motion)
    if (!reduceMotion && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.ai-card, .ai-feature, .teach-row, .about-body').forEach(function (el) {
            observer.observe(el);
        });
    }

    // Active nav link on scroll
    var sections = document.querySelectorAll('main section[id], #contact');
    var navLinks = document.querySelectorAll('.nav-link');

    function setActiveNavLink() {
        var scrollY = window.pageYOffset;
        sections.forEach(function (section) {
            var sectionHeight = section.offsetHeight;
            var sectionTop = section.offsetTop - 120;
            var sectionId = section.getAttribute('id');
            var navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
            navLinks.forEach(function (link) { link.classList.remove('active'); });
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            }
        });
    }

    if (sections.length) {
        window.addEventListener('scroll', setActiveNavLink);
    }
});
