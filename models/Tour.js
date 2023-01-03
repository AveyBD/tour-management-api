const mongoose = require("mongoose");

//schema design

const TourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "You must provide a valid Tour Name"],
      trim: true,
      unique: [true, "A tour exist with the same name"],
    },
    description: {
      type: String,
      required: [true, "Please provide a proper description"],
    },
    cost: {
      type: Number,
      required: [true, "You must set a cost for the tour"],
      min: [0, "Cost should be positive number or zero"],
    },
    tourLength: {
      type: String,
      required: [true, "Enter the how many days do you cover in this tour"],
    },
  },
  {
    timestamps: true,
  }
);

TourSchema.pre("save", function (next) {
  console.log("Saving into Database");
  next();
});

TourSchema.post("save", function (doc, next) {
  console.log("Saved into Database");
  next();
});

const Tour = mongoose.model("Tour", TourSchema);
module.exports = Tour;
