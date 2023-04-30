const express = require('express');

// Create a new instance of the Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Hello, beautiful wife!</h1>');
});

// Start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
