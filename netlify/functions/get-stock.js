const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '..', 'stock.json');

  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify({
        watermelon: 0,
        blueberry: 0,
        blackberry: 0,
        strawberry: 0,
        triplemelon: 0
      }, null, 2));
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: 'Error reading stock file' };
  }
};
