const mongoose = require("mongoose");

const newRestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: [
    {
      type: String,
    },
  ],
  location: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  website: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  openHours: {
    type: String,
  },
  priceRange: {
    type: String,
  },
  reservationsNeeded: {
    type: Boolean,
    default: false,
  },
  isDeliveryAvailable: {
    type: Boolean,
    default: false,
  },
  menuUrl: {
    type: String,
  },
  photos: [
    {
      type: String,
    },
  ],
});

const NewRestaurant = mongoose.model("NewRestaurant", newRestaurantSchema);

module.exports = NewRestaurant;
