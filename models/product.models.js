const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productURL: String,
    productName: String,
    productDescription: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    reviews: Number,
    price: Number,
    discountPrice: {
      type: Number,
      required: false,
    },
    discountPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    priceLowest_Highest_launch: String,
    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
