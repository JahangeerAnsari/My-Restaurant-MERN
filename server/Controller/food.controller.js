const Food = require("../Modals/Food");
const {
  insertFoodData,
  getAllFoodDetails,
} = require("../Services/food.Service");

exports.addFoodData = async (req, res) => {
  console.log("req.body ", req.body);

  const saveFood = await insertFoodData(req.body);
  return res.status(saveFood.status).json(saveFood);
};

exports.getAllFood = async (req, res) => {
  const result = await getAllFoodDetails();
  if (result.status === 400) {
    return res.status(result.status).json({
      message: "Something went wront",
      errormsg: result.error,
    });
  }

  if (result.status === 200) {
    return res.status(result.status).json({
      message: "fetched all food details",
      foods: result.data,
    });
  }
};
