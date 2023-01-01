const {
  getTourService,
  postTourService,
} = require("../services/tour.services");

module.exports.getTours = async (req, res, next) => {
  let filters = { ...req.query };
  const tours = await getTourService();
  res.send(tours);
};

module.exports.postTours = async (req, res, next) => {
  try {
    const result = await postTourService(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports.trendingTours = async (req, res, next) => {
  res.send("Trending Tour");
};

module.exports.cheapestTours = async (req, res, next) => {
  res.send("cheapest tour");
};

module.exports.detailsTours = async (req, res, next) => {
  res.send("details tour");
};

module.exports.updateTours = async (req, res, next) => {
  res.send("update tour");
};
