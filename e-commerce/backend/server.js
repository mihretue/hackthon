const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3003;
const Product=require('./models/product')
const cors=require('cors')
app.use(express.json());
app.use(cors())
mongoose.connect('mongodb+srv://fanu0925:mongodb_fanu0925RG@cluster0.uvyfcr8.mongodb.net/eGza', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/getproducts', (req, res) => {
    Product.find().
    then((docs)=>{
      res.json(docs);
    })
    .catch((err)=>{
        res.json(err);
    })
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