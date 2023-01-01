module.exports.getTours = async (req, res, next) => {
  res.send("Get Tour");
};

module.exports.postTours = async (req, res, next) => {
  res.send("Post Tour");
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
