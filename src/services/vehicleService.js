const Vehicle = require("../models/Vehicle");
const Customer = require("../models/Customer");

class VehicleService {
  static async createVehicle(data) {
    const { vin, licensePlate, customerId, make, model, year, details } = data;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    const vehicle = new Vehicle({
      vin,
      licensePlate,
      customer: customerId,
      make,
      model,
      year,
      details,
    });

    await vehicle.save();
    return { message: "Vehicle created successfully" };
  }

  static async getAllVehicles() {
    const vehicles = await Vehicle.find().populate("customer");
    return vehicles;
  }

  static async getVehicleById(id) {
    const vehicle = await Vehicle.findById(id).populate("customer");
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }
    return vehicle;
  }

  static async updateVehicle(id, data) {
    const { vin, licensePlate, make, model, year, details } = data;

    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    vehicle.vin = vin || vehicle.vin;
    vehicle.licensePlate = licensePlate || vehicle.licensePlate;
    vehicle.make = make || vehicle.make;
    vehicle.model = model || vehicle.model;
    vehicle.year = year || vehicle.year;
    vehicle.details = details || vehicle.details;

    await vehicle.save();
    return { message: "Vehicle updated successfully" };
  }

  static async deleteVehicle(id) {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    // await vehicle.remove();
    return { message: "Vehicle deleted successfully" };
  }
}

module.exports = VehicleService;
