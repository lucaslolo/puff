const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const filePath = path.join(__dirname, '../../data/stock.json');
  const newStock = JSON.parse(event.body);

  fs.writeFileSync(filePath, JSON.stringify(newStock, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Stock updated!', stock: newStock })
  };
};
