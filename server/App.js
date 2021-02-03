const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
require("./Database/index");

// multer
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

const foodRouter = require("./Router/food.route");
const authRouter = require("./Router/auth.route");
const categoryRouter = require("./Router/category.route");

//Passing body data
app.use(express.json());
app.use(cors());

app.use("/api", authRouter);
app.use("/api", categoryRouter);

app.use(
  "/api",
  foodRouter
);

app.listen(5000, () => {
  console.log("server running on :" + 5000);
});
