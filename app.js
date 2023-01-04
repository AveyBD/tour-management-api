const express = require("express");
const app = express();
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
// const mongoose = require("mongoose");
const tourRouter = require("./routes/tour.route");

app.use(express.json());
app.use(cors());

app.use("/api/v1/tours", tourRouter);

// Swagger JS Doc
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Tour Management System",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It uses mongoDB atlas to store data.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Github",
      url: "https://github.com/AveyBD/tour-management-api",
    },
  },
  servers: [
    {
      url: "https://tour-api-cha0.onrender.com/",
      description: "Live Server",
    },
    {
      url: "http://localhost:5000",
      description: "Development Server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
