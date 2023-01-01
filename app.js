const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
const tourRouter = require("./routes/tour.route");

app.use(express.json());
app.use(cors());

app.use("/api/v1/tours", tourRouter);

app.get("/", (req, res) => {
  res.end("API Server is UP & Running");
});
module.exports = app;
