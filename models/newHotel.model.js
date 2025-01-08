const mongoose = require("mongoose");

const newHotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
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
  checkInTime: {
    type: String,
    required: true,
  },
  checkOutTime: {
    type: String,
    required: true,
  },
  amenities: [
    {
      type: String,
    },
  ],
  priceRange: {
    type: String,
  },
  reservationsNeeded: {
    type: Boolean,
    default: false,
  },
  isParkingAvailable: {
    type: Boolean,
    default: false,
  },
  isWifiAvailable: {
    type: Boolean,
    default: false,
  },
  isPoolAvailable: {
    type: Boolean,
    default: false,
  },
  isSpaAvailable: {
    type: Boolean,
    default: false,
  },
  isRestaurantAvailable: {
    type: Boolean,
    default: false,
  },
  photos: [
    {
      type: String,
    },
  ],
});

const NewHotel = mongoose.model("NewHotel", newHotelSchema);

module.exports = NewHotel;
