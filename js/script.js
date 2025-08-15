
// Loader
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

const slider = document.querySelector('.nft-slider');
document.querySelector('.slide-left').addEventListener('click', () => {
  slider.scrollBy({ left: -220, behavior: 'smooth' });
});
document.querySelector('.slide-right').addEventListener('click', () => {
  slider.scrollBy({ left: 220, behavior: 'smooth' });
});

// Lire le stock
fetch('../stock.json')
.then(response => response.json())
.then(stock => {
  document.getElementById('stock-watermelon').textContent = stock.watermelon;
  document.getElementById('stock-blueberry').textContent = stock.blueberry;
  document.getElementById('stock-blackberry').textContent = stock.blackberry;
  document.getElementById('stock-strawberry').textContent = stock.strawberry;
  document.getElementById('stock-triplemelon').textContent = stock.triplemelon;
})
.catch(error => console.error("Erreur chargement stock :", error));