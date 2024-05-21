const express = require('express');
const https = require('https');
const app = express();

// Fungsi untuk memeriksa koneksi internet dengan melakukan request HTTPS ke Google
const checkInternetConnection = () => {
  return new Promise((resolve) => {
    const request = https.get('https://www.google.com', (response) => {
      resolve(response.statusCode === 200);
    });

    request.on('error', () => {
      resolve(false);
    });

    request.setTimeout(5000, () => {
      request.destroy();
      resolve(false);
    });
  });
};

// Endpoint root
app.get('/', (req, res) => {
  res.status(200).send('API running');
});

// Endpoint untuk memeriksa koneksi internet
app.get('/ping', async (req, res) => {
  const isConnected = await checkInternetConnection();
  if (isConnected) {
    res.status(200).send('Internet connection available');
  } else {
    res.status(500).send('No internet connection');
  }
});

// Menjalankan server pada port yang ditentukan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
