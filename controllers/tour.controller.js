const {
  getTourService,
  postTourService,
} = require("../services/tour.services");

module.exports.getTours = async (req, res, next) => {
  let filters = { ...req.query };
  const excludeFields = ["sort", "page", "limit", "fields"]; // Excluding some field which will be used in other operation.

  let filtersString = JSON.stringify(filters); // stringifying filters so that we can run replace operation
  filtersString = filtersString.replace(
    /\b(gt|gte|lt|lte|ne)\b/g,
    (match) => `$${match}`
  );
  filters = JSON.parse(filtersString);
  excludeFields.forEach((field) => delete filters[field]);
  const queries = {};
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    queries.sortBy = sortBy;
  }
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    // console.log(fields);
    queries.fields = fields;
  }

  if (req.query.page) {
    const { page = 1, limit = 10 } = req.query;
    const skipValue = (page - 1) * (limit * 1);
    queries.skip = skipValue;
    queries.limit = parseInt(limit);
  }
  try {
    const tours = await getTourService(filters, queries);
    res.status(200).json({
      success: true,
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't get data",
      error: error,
    });
  }
};

module.exports.postTours = async (req, res, next) => {
  try {
    const result = await postTourService(req.body);
    res.send({
      success: true,
      message: "Tour has been added.",
      data: result,
    });
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
