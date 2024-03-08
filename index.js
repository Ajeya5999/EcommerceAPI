//Getting Enviroment Variables

require('dotenv').config();

//Setting up Express

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//Using Mongoose for mongoDB

const db = require('./config/mongoose');

//Using urlEncoded to encode data

app.use(express.urlencoded());

//Setting up routes

app.use('/', require('./routes/index'));

// Running the server

app.listen(port, function(err){
    (err) ? console.log("Error in running the server:", err) : console.log("Server is running on port:", port);
});