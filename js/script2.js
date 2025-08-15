let panier = [];

function ajouterPanier(nom, prix) {
  // Vérifie si le produit est déjà dans le panier
  const produitExistant = panier.find(item => item.nom === nom);
  if (produitExistant) {
    produitExistant.quantite += 1; // Augmente la quantité
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
  const panierDiv = document.querySelector('.panier');
  const liste = document.getElementById('panierListe');
  liste.innerHTML = '';
  let total = 0;

  if (panier.length === 0) {
    panierDiv.style.display = 'none'; // cache le panier si vide
    return;
  } else {
    panierDiv.style.display = 'block'; // affiche le panier s'il y a au moins un produit
  }

  panier.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.nom} x${item.quantite} - ${item.prix * item.quantite}€ 
                    <button onclick="retirerPanier(${index})">Retirer</button>`;
    liste.appendChild(li);
    total += item.prix * item.quantite;
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
    message += `- ${item.nom} x${item.quantite} : ${item.prix * item.quantite}€\n`;
  });
  message += `Total: ${document.getElementById('total').textContent}€`;

  navigator.clipboard.writeText(message)
    .then(() => {
      alert("Commande copiée ! Ouvre Snapchat et colle le message.");
      window.open("https://www.snapchat.com/add/chopetapuff30k", "_blank");
    })
    .catch(() => alert("Impossible de copier la commande."));
}