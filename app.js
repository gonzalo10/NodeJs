const http = require('http');
const express = require('express')

const routes = require('./routes');

const app = express();

app.use('/', (req, res, next) => {
    console.log('this always run');
    next();
});
app.use('/add-product', (req, res, next) => {
    console.log('In another the middleware!!!');
    res.send('<h1>The "Add Product" PAge </h1>');
});
app.use('/', (req, res, next) => {
    console.log('In the middleware!!!');
    res.send('<h1>Hello from express </h1>');
});


app.listen(3001);
