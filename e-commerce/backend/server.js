const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = 3002;
const Product=require('./models/product')
// mongoose.connect('mongodb://localhost:27017/egza', { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    console.log(err);
    res.json({res:'Internal Server Error'});
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});