const express = require('express');
const app = express();
const port = 5002;

app.get('/', (req, res) => {
  res.send('User Service');
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});