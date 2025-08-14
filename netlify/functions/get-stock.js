const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '..', 'stock.json');
  const stockData = fs.readFileSync(filePath, 'utf-8');
  return {
    statusCode: 200,
    body: stockData
  };
};