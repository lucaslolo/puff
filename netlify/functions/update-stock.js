const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const filePath = path.join(__dirname, '..', 'stock.json');

  try {
    // Lire le stock actuel
    let currentStock = {};
    if (fs.existsSync(filePath)) {
      currentStock = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
      currentStock = {
        watermelon: 0,
        blueberry: 0,
        blackberry: 0,
        strawberry: 0,
        triplemelon: 0
      };
    }

    // Récupérer et valider le nouveau stock
    const newStock = JSON.parse(event.body);
    for (const key in newStock) {
      if (typeof newStock[key] !== 'number' || newStock[key] < 0) {
        return { statusCode: 400, body: `Invalid value for ${key}` };
      }
      currentStock[key] = newStock[key];
    }

    // Sauvegarder
    fs.writeFileSync(filePath, JSON.stringify(currentStock, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Stock updated successfully', stock: currentStock })
    };
  } catch (err) {
    return { statusCode: 500, body: 'Error writing stock file' };
  }
};
