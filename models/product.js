const mongoose = require('mongoose');

//Product Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

//Compiling the Schema into a Model

const product = mongoose.model('Product', productSchema);

module.exports = product;