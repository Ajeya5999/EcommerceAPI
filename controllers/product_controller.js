const Product = require('../models/product'); //Getting Product Schema

module.exports.create = async function(req, res) {
    let {name, quantity} = req.body;
    try {
        let data = await Product.create({
            name: name,
            quantity: quantity
        });
        res.status(201).json(data);
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
        res.status(200).json(data);
    } catch(err) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
    }
}