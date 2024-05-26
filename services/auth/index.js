const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  res.send('Auth Service');
});

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});