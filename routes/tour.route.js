const express = require("express");
const {
  getTours,
  postTours,
  trendingTours,
  cheapestTours,
  updateTours,
  detailsTours,
} = require("../controllers/tour.controller");
const tourRouter = express.Router();

tourRouter.route("/").get(getTours).post(postTours);
tourRouter.route("/trending").get(trendingTours);
tourRouter.route("/cheapest").get(cheapestTours);
tourRouter.route("/:id").get(detailsTours).patch(updateTours);

module.exports = tourRouter;
