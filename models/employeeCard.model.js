const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  photoURL: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  Id_No: String,
  dateOfBirth: Number,
  mail: {
    type: String,
    required: true,
  },
  tel_number: {
    type: Number,
    required: true,
  },
  address: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
