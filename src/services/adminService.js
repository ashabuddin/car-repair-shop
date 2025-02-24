const Employee = require("../models/Employee");
const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");
const Service = require("../models/Service");
const Visit = require("../models/Visit");

class AdminService {
  static async getDashboardData() {
    const employeeCount = await Employee.countDocuments();
    const customerCount = await Customer.countDocuments();
    const vehicleCount = await Vehicle.countDocuments();
    const serviceCount = await Service.countDocuments();
    const visitCount = await Visit.countDocuments();

    return {
      employeeCount,
      customerCount,
      vehicleCount,
      serviceCount,
      visitCount,
    };
  }

  static async getCustomerReport() {
    const customers = await Customer.find();
    return customers;
  }

  static async getEmployeeReport() {
    const employees = await Employee.find();
    return employees;
  }

  static async getVehicleReport() {
    const vehicles = await Vehicle.find();
    return vehicles;
  }

  static async getServiceReport() {
    const services = await Service.find();
    return services;
  }

  static async getVisitReport() {
    const visits = await Visit.find();
    return visits;
  }
}


module.exports = AdminService;