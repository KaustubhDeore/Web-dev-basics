const mongoose = require('mongoose');
const Product = require('./model/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to mongo");
    })
    .catch(err => {
        console.log("error!!");
        console.log(err);
    })

    // const p = new Product({
    //     name: 'Grapefruit',
    //     price: 40,
    //     category: 'fruit'
    // })
    const seedproducts = [
        {
            name: 'Methi',
            price: 20,
            category: 'vegetable'
        },
        {
            name: 'Apple',
            price: 60,
            category: 'fruit'
        },
        {
            name: 'Peru',
            price: 40,
            category: 'fruit'
        },
        {
            name: 'Shrikhand',
            price: 150,
            category: 'dairy'
        },
        {
            name: 'Tomato',
            price: 30,
            category: 'vegetable'
        },
    ]

    Product.insertMany(seedproducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })