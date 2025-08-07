const express = require('express');
const app = express();

// Use the port Render provides, or 3000 for local testing
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the minimal server! It is working!');
});

app.listen(PORT, () => {
  console.log(`Minimal server is listening on port ${PORT}`);
});