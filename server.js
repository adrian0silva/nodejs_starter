const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o DB

mongoose.connect('mongodb://127.0.0.1:27017/nodeapi',
    { useNewUrlParser: true });
requireDir('./src/models');

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/nodeapi');
})

const Product = mongoose.model('Product');

// primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: "React Native",
        description: "Build app with",
        url: "gitub"
    })
    return res.send('Hello rocketseat');
});

app.listen(3000);