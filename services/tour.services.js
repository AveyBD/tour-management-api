const Tour = require("../models/Tour");
const views = {};
exports.getTourService = async (filter, queries) => {
  const tours = await Tour.find(filter)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sortBy)
    .select(queries.fields);
  const totalTour = await Tour.countDocuments(filter);
  const totalPage = Math.ceil(totalTour / queries.limit);
  return { totalTour, totalPage, tours };
  return tours;
};

exports.postTourService = async (data) => {
  return await Tour.create(data);
};

exports.getTourDetailsService = async (id) => {
  console.log(id);
  return await Tour.findById({ _id: id });
};
