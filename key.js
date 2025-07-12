    const crypto = require('crypto');
    const fs = require('fs');
    const path = require('path');

    const generateApiKey = () => {
        return crypto.randomBytes(32).toString('hex'); // Generates a 64-character hexadecimal string
    };

    const apiKey = generateApiKey();
    const envContent = `API_KEY=${apiKey}\n`;

    // Write to .env file
    fs.writeFileSync(path.join(__dirname, '.env'), envContent);

    console.log('Secure API key generated and saved to .env file.');
    console.log('API Key:', apiKey);