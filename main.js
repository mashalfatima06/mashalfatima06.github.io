document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) {
        return;
    }

    const closeMenu = () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav-open');
        document.body.classList.remove('menu-open');
    };

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        navLinks.classList.toggle('nav-open', !isExpanded);
        document.body.classList.toggle('menu-open', !isExpanded);
    });

    const mobileQuery = window.matchMedia('(max-width: 768px)');

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileQuery.matches) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (!mobileQuery.matches) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});
