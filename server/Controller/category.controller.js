const {
  insertCategory,
  fetchAllCategoryData,
} = require("../Services/categoryService");

exports.saveCategory = async (req, res) => {
  const result = await insertCategory(req.body);
  return res.status(result.status).json(result);
};

exports.findAllCategory = async (req, res) => {
  const result = await fetchAllCategoryData();
  return res.status(result.status).json(result);
};
