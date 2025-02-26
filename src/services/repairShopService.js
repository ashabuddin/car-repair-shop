const RepairShop = require("../models/RepairShop");
const Employee = require("../models/Employee");

class RepairShopService {
  static async createRepairShop(data) {
    const { shopName, shopOwnerId } = data;
    const shopOwner = Employee.findById(shopOwnerId);
    // console.log("shopOwner:",shopOwnerId);
    if (!shopOwner) {
        throw new Error("shopOwnerId not found");
      }
    const repairShop = new RepairShop({
      shopName,
      shopOwner: shopOwnerId,
    });
    await repairShop.save();
    return { message: "RepairShop created successfully" };
  }
  static async getAllRepairShops() {
    const repairShop = await RepairShop.find().populate("shopOwner");
    return repairShop;
  }
  static async deleteRepairShop(id) {
    const offer = await RepairShop.findByIdAndDelete(id);
    if (!offer) {
      throw new Error("RepairShop not found");
    }

    // await offer.remove();
    return { message: "RepairShop deleted successfully" };
  }
}

module.exports = RepairShopService;
