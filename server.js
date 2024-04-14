const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Default port or port from environment variable

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example of an additional route
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
