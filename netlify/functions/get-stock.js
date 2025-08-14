const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '..', 'stock.json');

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: 'Error reading stock file' };
  }
};
