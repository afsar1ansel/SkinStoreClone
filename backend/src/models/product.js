const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  brand: String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  price_sign: String,
  currency: String,
  image_link: { type: String, required: true },
  description: { type: String, required: true },
  rating: Number,
  review: Number,
  category: String,
  product_type: String,
  quantity: Number,
});

const product = mongoose.model("product", productSchema);
module.exports = product;



