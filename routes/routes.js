const Product = require('../product');
const express = require('express');
const router = express.Router();


// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

//Fetch all products
router.get('/api/products', async (req,res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Fetch by ID
router.get('/api/products/:id', async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create a new product
router.post('/api/products', async (req,res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Update a product
router.put('/api/products/:id', async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!product) return res.status(404).send('Product not found');
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete a product
router.delete('/api/products/:id', async (req,res) => {
    try {
        const product = await Product.findByIdAndDelete((req.params.id));
        if (!product) return res.status(404).send('Product not in the inventory');
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;