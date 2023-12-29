const express = require('express');
const app = express();

// Asynchronous route that simulates an error
app.get('/async-error', async (req, res, next) => {
  try {
    // Simulate an asynchronous error
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('This is an asynchronous error.'));
      }, 1000);
    });
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error: ' + err.message);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
