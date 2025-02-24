const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vin: { type: String, required: true, unique: true },
  licensePlate: { type: String, required: true, unique: true },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
