// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const taskroutes = require('./routes/routes');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const { NotFoundError, ValidationError } = require('./middleware/errors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
const mongouri = 'mongodb://localhost:27017/Actisdb';

// Middleware setup
app.use(express.json());

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// TODO Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products


// TODO Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling


//Database Connection
mongoose.connect(mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( () => console.log('Database connection Success!'))
.catch((err) => console.log('Connection Faild!: ',err));
//Use routes
app.use('/', taskroutes);

//use authentication middleware
app.use(auth);
//use logger middleware
app.use(logger);
//use error handling middleware
app.use(errorHandler);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 