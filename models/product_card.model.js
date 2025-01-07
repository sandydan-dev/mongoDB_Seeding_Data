const mongoose = require("mongoose");

const productCardSchema = new mongoose.Schema(
  {
    productName: String,
    productType: String,
    info: String,
    color: {
      type: String,
      enum: ["Blue", "Red", "Green", "Orange", "Black"],
    },
    size: {
      type: String,
      enum: ["7", "8", "9", "10", "11"],
    },
    price: {
      type: Number,
      min: 0,
      max: 1000,
    },
  },
  { timestamps: true }
);

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = ProductCard;
