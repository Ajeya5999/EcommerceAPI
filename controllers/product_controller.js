const Product = require('../models/product'); //Getting Product Schema

module.exports.create = async function(req, res) {
    let {name, quantity} = req.body;
    try {
        let data = await Product.create({
            name: name,
            quantity: quantity
        });
        res.status(201).json({
            "data": {
                "product": {
                    "name": data.name,
                    "quantity": data.quantity 
                }
            }
        });
    } catch(err) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
    }
}

module.exports.getProducts = async function(req, res) {
    try {
        let data = await Product.find({})
        .select('_id name quantity')
        .exec();
        res.status(200).json({
            "data": {
                "product": data
            }
        });
    } catch(err) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
    }
}

module.exports.delete = async function(req, res) {
    let productId = req.params.id;
    try {
        await Product.findByIdAndDelete(productId);
        res.status(200).json({
            "data": {
                "message": "product deleted"
            }
        })
    } catch(err) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
    }
}