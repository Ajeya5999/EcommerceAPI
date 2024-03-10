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

module.exports.update = async function(req, res) {
    let productId = req.params.id, number = req.query.number;
    try {
        let data = await Product.findByIdAndUpdate(productId, {
            $inc: {
                quantity: number
            }
        }, {
            returnDocument: 'after'
        });
        res.status(200).json({
            "data": {
                "product": {
                    "_id": data._id,
                    "name": data.name,
                    "quantity": data.quantity
                },
                "message": "updated successfully"
            }
        });
    } catch(err) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
    }
}