const toggleBtn = document.getElementById('toggleTheme');

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    toggleBtn.textContent = '🌞'; // soleil
  } else {
    document.body.classList.remove('light-theme');
    toggleBtn.textContent = '🌙'; // lune
  }
  localStorage.setItem('theme', theme);
}

// Récupérer le thème enregistré ou mettre 'dark' par défaut
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});
