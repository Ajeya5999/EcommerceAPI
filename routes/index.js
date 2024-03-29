//Getting express router

const express = require("express");
const router = express.Router();

//Getting controllers

const productController = require('../controllers/product_controller');

console.log("Router has been loaded");

router.get('/products', productController.getProducts); //Get the list of all products
router.post('/products/create', productController.create); //Add a product to the list
router.delete('/products/:id', productController.delete) //Delete a product from the list
router.put('/products/:id/update_quantity', productController.update) //Update a product's quantity from the list
router.all('*', productController.notFound); //For Non Existant Routes  

module.exports = router;