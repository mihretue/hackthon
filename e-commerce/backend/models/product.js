const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number },
    discountPercentage: { type: Number },
    inStock: { type: Boolean, default: true },
  },{collection:'eGza'});
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports=Product