const Category = require("../Modals/Category");
exports.checkCategoryExists = (req, res, next) => {
  return Category.find({ category: req.body.category })
    .then((categories) => {
      if (categories.length > 0) {
        return res.status(200).json({
          message: "Category already exists!",
        });
      }
      next();
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Internal error",
        error: err,
      });
    });
};

exports.insertCategory = (body) => {
  return Category({ ...body })
    .save()
    .then((data) => {
      if (data) {
        return {
          message: "Category added successfully!",
          status: 201,
          categoryData: data,
        };
      }
      return {
        message: "Category couldn't added!",
        status: 200,
      };
    })
    .catch((err) => {
      return {
        message: "Internal error!",
        status: 400,
        error: err,
      };
    });
};

exports.fetchAllCategoryData = () => {
  return Category.find()
    .then((data) => {
      if (data) {
        return {
          status: 200,
          categories: data,
          message: "All categories fetched!"
        };
      }
    })
    .catch((err) => {
      return {
        error: err,
        status: 400,
        message: "Something went wrong!"
      };
    });
};
