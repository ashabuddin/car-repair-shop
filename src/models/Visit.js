const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  repairShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RepairShop",
    required: true,
  },
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  }],
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  visitStartDate: { type: Date, required: true,default: Date.now },
  visitEndDate: { type: Date },
  status: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Visit", visitSchema);
