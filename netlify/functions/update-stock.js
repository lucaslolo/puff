const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const newStock = JSON.parse(event.body);

  const filePath = path.join(__dirname, '..', 'stock.json');

  try {
    fs.writeFileSync(filePath, JSON.stringify(newStock, null, 2));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Stock updated successfully', newStock })
    };
  } catch (err) {
    return { statusCode: 500, body: 'Error writing stock file' };
  }
};
