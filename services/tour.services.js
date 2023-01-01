const Tour = require("../models/Tour");

exports.getTourService = async (filter, queries) => {
  const tours = await Tour.find({});
  return tours;
};

exports.postTourService = async (data) => {
  return await Tour.create(data);
};
