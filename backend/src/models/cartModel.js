const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  id: { type: Number, },
  brand: String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  price_sign: String,
  currency: String,
  image_link1: { type: String, required: true },
  description: { type: String, required: true },
  rating: Number,
  review: Number,
  category: String,
  product_type: String,
  quantity: Number,
});

const cartList = mongoose.model("cart", cartSchema);
module.exports = cartList;
