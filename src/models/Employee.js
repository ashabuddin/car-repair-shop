const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["employee", "owner", "admin"],
      default: "employee",
      required: true,
    },
    // role: { type: String, default: 'employee' },
    employmentStartDate: { type: Date, default: Date.now },
    employmentEndDate: { type: Date, default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
