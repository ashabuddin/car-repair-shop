const Visit = require("../models/Visit");
const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");
const Service = require("../models/Service");

class VisitService {
  static async createVisit(data) {
    const {
      repairShopId,
      customerId,
      vehicleId,
      services,
      visitStartDate,
      visitEndDate,
      status,
      totalPrice,
    } = data;

    const customer = await Customer.findById(customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    // const services = await Service.find({ _id: { $in: servicesId } });
    const serviceRecords = await Service.find({ _id: { $in: services } });
    if (serviceRecords.length !== services.length) {
      throw new Error("Some services not found");
    }

    // if (services.length !== services.length) {
    //   throw new Error("Some services not found");
    // }

    const visit = new Visit({
      repairShop: repairShopId,
      customer: customerId,
      vehicle: vehicleId,
      services: services,
      visitStartDate: visitStartDate,
      visitEndDate: visitEndDate,
      status: status,
      totalPrice: totalPrice,
    });

    await visit.save();
    return { message: "Visit created successfully" };
  }

  static async getAllVisits() {
    const visits = await Visit.find().populate("customer vehicle services");
    return visits;
  }

  static async getVisitById(id) {
    const visit = await Visit.findById(id).populate(
      "customer vehicle services"
    );
    if (!visit) {
      throw new Error("Visit not found");
    }
    return visit;
  }

  static async updateVisit(id, data) {
    const {
      repairShopId,
      customerId,
      vehicleId,
      services,
      visitStartDate,
      visitEndDate,
      status,
      totalPrice,
    } = data;

    const visit = await Visit.findById(id);
    if (!visit) {
      throw new Error("Visit not found");
    }

    if (repairShopId) visit.repairShop = repairShopId;
    if (customerId) {
      const customer = await Customer.findById(customerId);
      if (!customer) {
        throw new Error("Customer not found");
      }
      visit.customer = customerId;
    }

    if (vehicleId) {
      const vehicle = await Vehicle.findById(vehicleId);
      if (!vehicle) {
        throw new Error("Vehicle not found");
      }
      visit.vehicle = vehicleId;
    }

    if (services) {
      const serviceRecords = await Service.find({ _id: { $in: services } });
      if (serviceRecords.length !== services.length) {
        throw new Error("Some services not found");
      }
      visit.services = services;
    }

    if (visitStartDate) visit.visitStartDate = visitStartDate;
    if (visitEndDate) visit.visitEndDate = visitEndDate;
    if (status) visit.status = status;
    if (totalPrice) visit.totalPrice = totalPrice;

    await visit.save();
    return { message: "Visit updated successfully" };
  }

  static async deleteVisit(id) {
    const visit = await Visit.findByIdAndDelete(id);
    if (!visit) {
      throw new Error("Visit not found");
    }

    // await visit.remove();
    return { message: "Visit deleted successfully" };
  }
}

module.exports = VisitService;
