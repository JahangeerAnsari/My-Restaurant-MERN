const mongoose = require("mongoose");
const foodSchema = mongoose.Schema({
  image: {
    type: String,
    default: "no data",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
