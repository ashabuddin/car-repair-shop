const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");

class EmployeeService {
  static async register(data) {
    const { firstName, lastName, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = new Employee({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await employee.save();
    return { message: "Employee registered successfully" };
  }

  static async login(data) {
    const { email, password } = data;
    const employee = await Employee.findOne({ email });

    if (!employee) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: employee._id, role: employee.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    return { token };
  }
  static async getAllEmployees() {
    const employees = await Employee.find().select("-password");
    return employees;
  }

  static async updateEmployee(id, data) {
    const { firstName, lastName, email, role, isActive } = data;

    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Employee not found");
    }

    employee.firstName = firstName || employee.firstName;
    employee.lastName = lastName || employee.lastName;
    employee.email = email || employee.email;
    employee.role = role || employee.role;
    employee.isActive = isActive !== undefined ? isActive : employee.isActive;

    await employee.save();
    return { message: "Employee updated successfully" };
  }
  static async deactivateEmployee(id) {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Employee not found");
    }

    employee.isActive = false;
    await employee.save();
    return { message: "Employee deactivated successfully" };
  }
}

module.exports = EmployeeService;
