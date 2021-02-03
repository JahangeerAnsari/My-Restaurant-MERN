const Food = require("../Modals/Food");
exports.checkFoodExits = (req, res, next) => {
  Food.findOne({ name: req.body.name })
    .then((_food) => {
      if (_food) {
        return res.status(200).json({
          message: "Already exits this name data",
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Something went wrong",
        error: err,
      });
    });
};

exports.insertFoodData = (body) => {
  return Food(body)
    .save()
    .then((food) => {
      if (food) {
        return {
          status: 201,
          food,
          message: food.name + " has added successfully!"
        };
      }
      return {
        status: 200,
        message: "Food couldn't added! please try again...",
      };
    })
    .catch((err) => {
        console.log(err)
      return {
        status: 400,
        error: err,
        message: "Something went wrong!"
      };
    });
};

exports.getAllFoodDetails = () =>{
  return  Food.find().then((data) =>{
        console.log(data);
        if(data){
            return{
                status: 200,
                data:data
            }
        }
    }).catch(err =>{
        return{
            status:400,
            error: err
        }
    })
}
