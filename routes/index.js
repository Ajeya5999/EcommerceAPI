//Getting express router

const express = require("express");
const router = express.Router();

//Getting controllers

const productController = require('../controllers/product_controller');

console.log("Router has been loaded");

router.post('/products/create', productController.create);
// router.all('*', homeController.notFound); //For Non Existant Routes  

module.exports = router;