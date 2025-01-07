const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    operatingSystem: {
      type: String,
      enum: ["iOS", "Android", "Windows", "Other"],
    },
    displaySize: {
      type: String,
      enum: ["5.5 inches", "6.2 inches", "6.7 inches", "6.81 inches", "6.5 inches"],
    },
    storage: {
      type: [String],
      enum: ["64GB", "128GB", "256GB", "512GB"],
    },
    ram: {
      type: String,
      enum: ["4GB", "6GB", "8GB", "16GB", "12GB"],
    },
    cameraSpaces: {
      type: Object,
      megapixelCount: ["30", "40", "50"],
      lensType: {
        type: String,
        enum: ["Wide-angle", "Telephoto", "Ultra-wide", "Macro"],
      },
    },
    batteryCapacity: {
      enum: ["3000mAh", "4000mAh", "5000mAh"],
    },
    connectivity: {
      type: [String],
      enum: ["Wi-Fi", "Bluetooth", "NFC", "USB-C", "4G LTE", "5G"],
    },
    price: {
      type: Number,
      required: true,
    },
    colorAvailable: {
      type: String,
      default: [],
    },
    features: {
      type: String,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);

module.exports = Smartphone;
