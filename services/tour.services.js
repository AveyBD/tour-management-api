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
  try {
    const tour = await Tour.findById({ _id: id });

    if (!tour.count) {
      // const data = { count: 1 };
      const countUpdate = await Tour.updateOne({ _id: id }, { count: 1 });
      console.log(countUpdate);
    } else {
      const count = tour.count + 1;
      await Tour.updateOne({ _id: id }, { count: count });
    }
    return tour;
  } catch (error) {}
};
exports.updateTourDetailsService = async (id, data) => {
  try {
    return await Tour.updateOne({ _id: id.id }, data, {
      runValidators: true,
    });
  } catch (error) {
    return error;
  }
};
