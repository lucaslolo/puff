// ============================= Loader Fade =============================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0"; // fade out
  setTimeout(() => loader.style.display = "none", 500); // cache après la transition
});