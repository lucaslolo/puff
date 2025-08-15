// ============================= Loader Fade =============================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0"; // fade out
  setTimeout(() => loader.style.display = "none", 500); // cache après la transition


  fetch('stock.json')
    .then(response => response.json())
    .then(stock => {
      // Exemple pour Watermelon
      document.getElementById('stock-number-watermelon').textContent = stock.watermelon;
      document.getElementById('stock-number-blueberry').textContent = stock.blueberry;
      document.getElementById('stock-number-blackberry').textContent = stock.blackberry;
      document.getElementById('stock-number-strawberry').textContent = stock.strawberry;
      document.getElementById('stock-number-triplemelon').textContent = stock.triplemelon;
    })
    .catch(err => console.error('Erreur de chargement du stock:', err));

});