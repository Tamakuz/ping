const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Initial state
let state = true;
let statePiko = true

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


//piko state
app.get('/state-piko', (req, res) => {
  res.status(200).send(statePiko.toString());
});

app.get('/change-true-piko', (req, res) => {
  statePiko = true;
  res.status(200).send(`State updated to: ${statePiko}`);
});

app.get('/change-false-piko', (req, res) => {
  statePiko = false;
  res.status(200).send(`State updated to: ${statePiko}`);
});


// Menjalankan server pada port yang ditentukan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
