const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '../../data/stock.json');
  const stock = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    statusCode: 200,
    body: JSON.stringify(stock)
  };
};
