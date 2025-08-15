let panier = [];

function ajouterPanier(nom, prix) {
  const produitExistant = panier.find(item => item.nom === nom);
  if (produitExistant) {
    produitExistant.quantite += 1;
  } else {
    panier.push({ nom, prix, quantite: 1 });
  }
  afficherPanier();
}

function retirerPanier(index) {
  panier.splice(index, 1);
  afficherPanier();
}

function afficherPanier() {
  const panierDiv = document.getElementById('panier');
  const liste = document.getElementById('panierListe');
  liste.innerHTML = '';

  if (panier.length > 0) {
    panierDiv.style.display = 'block'; // montre le panier si il y a au moins un produit
  } else {
    panierDiv.style.display = 'none'; // cache le panier si vide
  }

  let totalGeneral = 0;

  panier.forEach((item, index) => {
    const totalProduit = item.prix * item.quantite;
    const li = document.createElement('li');
    li.innerHTML = `${item.quantite}x ${item.nom} - ${totalProduit}€ 
                    <button onclick="retirerPanier(${index})">Retirer</button>`;
    liste.appendChild(li);
    totalGeneral += totalProduit;
  });

  document.getElementById('total').textContent = totalGeneral;
}

function commanderSnapEtOuvrirSnap() {
  if (panier.length === 0) {
    alert("Ton panier est vide !");
    return;
  }

  let message = "Commande:\n";
  panier.forEach(item => {
    const totalProduit = item.prix * item.quantite;
    message += `${item.quantite}x ${item.nom} ${totalProduit}€\n`;
  });

  const totalGeneral = panier.reduce((acc, item) => acc + item.prix * item.quantite, 0);
  message += `Total: ${totalGeneral}€`;

  navigator.clipboard.writeText(message)
    .then(() => {
      alert("Commande copiée ! Ouvre Snapchat et colle le message.");
      window.open("https://www.snapchat.com/add/chopetapuff30k", "_blank");
    })
    .catch(() => alert("Impossible de copier la commande."));
}
