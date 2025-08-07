const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// Thème : appliquer depuis localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        toggleBtn.textContent = '🌙';
    }
});

// Basculer thème (sombre ↔ clair)
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
});

// Loader : supprimer après chargement
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});
