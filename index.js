const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Initial state
let state = true;

// Endpoint root
app.get('/', (req, res) => {
  res.status(200).send('API running');
});

// Endpoint untuk memeriksa koneksi internet
app.get('/ping', async (req, res) => {
  res.status(200).send('Pong');
});

// Endpoint to get the current state
app.get('/state', (req, res) => {
  res.status(200).send(state.toString());
});

// Endpoint to update the state
app.get('/change-true', (req, res) => {
  state = true;
  res.status(200).send(`State updated to: ${state}`);
});

app.get('/change-false', (req, res) => {
  state = false;
  res.status(200).send(`State updated to: ${state}`);
});

// Menjalankan server pada port yang ditentukan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
