const Service = require("../models/Service");

class ServiceService {
  static async createService(data) {
    const { serviceName, description, price, isActive } = data;

    const service = new Service({
      serviceName,
      description,
      price,
      isActive,
    });

    await service.save();
    return { message: "Service created successfully" };
  }

  static async getAllServices() {
    const services = await Service.find();
    return services;
  }

  static async getServiceById(id) {
    const service = await Service.findById(id);
    if (!service) {
      throw new Error("Service not found");
    }
    return service;
  }

  static async updateService(id, data) {
    const { serviceName, description, price, isActive } = data;

    const service = await Service.findById(id);
    if (!service) {
      throw new Error("Service not found");
    }

    service.serviceName = serviceName || service.serviceName;
    service.description = description || service.description;
    service.price = price || service.price;
    service.isActive = isActive !== undefined ? isActive : service.isActive;

    await service.save();
    return { message: "Service updated successfully" };
  }

  static async deleteService(id) {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      throw new Error("Service not found");
    }

    // await service.remove();
    return { message: "Service deleted successfully" };
  }
}

module.exports = ServiceService;
