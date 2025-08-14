const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const newStock = JSON.parse(event.body);
  const filePath = path.join(__dirname, '..', 'stock.json');

  fs.writeFileSync(filePath, JSON.stringify(newStock, null, 2), 'utf-8');

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Stock mis à jour avec succès !' })
  };
};
