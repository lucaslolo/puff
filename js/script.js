window.addEventListener("load", () => {
  // Loader
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);

  // Carousel NFT
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const nftGrid = document.querySelector(".grid-nfts");
const scrollAmount = 420;

leftArrow.addEventListener("click", () => {
  nftGrid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  nftGrid.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
});



