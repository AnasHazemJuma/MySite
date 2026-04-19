// Small script to toggle the mobile nav and enable smooth scrolling
(function () {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('show'))
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const targetId = a.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (nav.classList.contains('show')) nav.classList.remove('show');
            }
        })
    })
})();