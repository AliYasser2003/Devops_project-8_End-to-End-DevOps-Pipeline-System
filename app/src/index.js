const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Project 8 Running');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
