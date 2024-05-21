const express = require('express');
const app = express();

// Endpoint untuk memeriksa koneksi internet
app.get('/', (req, res) => {
  res.status(200).send('api running');
});
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// Menjalankan server pada port yang ditentukan
app.listen(3000, () => console.log("Server ready on port 3000."));
