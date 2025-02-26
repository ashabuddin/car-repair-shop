const mongoose = require("mongoose");

const repairShopSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  shopOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("RepairShop", repairShopSchema);
