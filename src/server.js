const http = require("http");
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cookie-parser")());

// Routes
app.use("/api/v1", router);
// Add other routes as needed

// Error handling middleware
app.use((error, _req, res, _next) => {
  const errorObj = {
    message: error?.message || "Somethings Went Wrong",
    status: error?.status || 500,
  };

  res.status(errorObj.status).json(errorObj);
});
// Define the port the server will listen on
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(` server is running on port : ${PORT} `);
});
