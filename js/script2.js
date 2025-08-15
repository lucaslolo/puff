let panier = [];

function ajouterPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById('panierListe');
  liste.innerHTML = '';
  let total = 0;
  panier.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nom} - ${item.prix}€`;
    liste.appendChild(li);
    total += item.prix;
  });
  document.getElementById('total').textContent = total;
}

function commanderSnapEtOuvrirSnap() {
  if (panier.length === 0) {
    alert("Ton panier est vide !");
    return;
  }

  let message = "Commande:\n";
  panier.forEach(item => {
    message += `- ${item.nom} : ${item.prix}€\n`;
  });
  message += `Total: ${document.getElementById('total').textContent}€`;

  navigator.clipboard.writeText(message)
    .then(() => {
      alert("Commande copiée ! Ouvre Snapchat et colle le message.");
      window.open("https://www.snapchat.com/add/chopetapuff30k", "_blank");
    })
    .catch(() => alert("Impossible de copier la commande."));
}
