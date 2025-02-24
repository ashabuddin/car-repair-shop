const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  services: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  ],
  offerDescription: { type: String },
  offerPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Offer", offerSchema);
