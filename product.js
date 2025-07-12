const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {type: String, required: true},
    description: {type: String, default: null},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    inStock: {type: Boolean, default: false}
});

module.exports = mongoose.model('Product', productSchema);