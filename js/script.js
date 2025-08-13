const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// Appliquer thème dès le chargement
(function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        toggleBtn.textContent = '🌙';
        toggleBtn.setAttribute('aria-pressed', 'false');
    } else {
        toggleBtn.textContent = '☀️';
        toggleBtn.setAttribute('aria-pressed', 'true');
    }
})();

// Basculer thème
toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggleBtn.textContent = isLight ? '🌙' : '☀️';
    toggleBtn.setAttribute('aria-pressed', isLight ? 'false' : 'true');
});

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    loader.style.opacity = '0';
    loader.style.transform = 'translateY(-10px)';
    setTimeout(() => loader.remove(), 600);
});

// Animation au scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));