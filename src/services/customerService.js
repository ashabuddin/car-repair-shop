const Customer = require("../models/Customer");

class CustomerService {
  static async createCustomer(data) {
    const { firstName, lastName, email, phone, address } = data;
    const customer = new Customer({
      firstName,
      lastName,
      email,
      phone,
      address,
    });

    await customer.save();
    return { message: "Customer created successfully" };
  }

  static async getAllCustomers() {
    const customers = await Customer.find();
    return customers;
  }

  static async getCustomerById(id) {
    const customer = await Customer.findById(id);
    if (!customer) {
      throw new Error("Customer not found");
    }
    return customer;
  }

  static async updateCustomer(id, data) {
    const { firstName, lastName, email, phone, address } = data;

    const customer = await Customer.findById(id);
    if (!customer) {
      throw new Error("Customer not found");
    }

    customer.firstName = firstName || customer.firstName;
    customer.lastName = lastName || customer.lastName;
    customer.email = email || customer.email;
    customer.phone = phone || customer.phone;
    customer.address = address || customer.address;

    await customer.save();
    return { message: "Customer updated successfully" };
  }

  static async deleteCustomer(id) {
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      throw new Error("Customer not found");
    }

    // console.log(customer);
    // await customer.delete();
    return { message: "Customer deleted successfully" };
  }
}

module.exports = CustomerService;
