const app = require("express");
const {
  saveCategory,
  findAllCategory,
} = require("../Controller/category.controller");
const { checkCategoryExists } = require("../Services/categoryService");
const router = app.Router();

router.post("/category/add", checkCategoryExists, saveCategory);

router.get("/categories/getAll", findAllCategory);

module.exports = router;
