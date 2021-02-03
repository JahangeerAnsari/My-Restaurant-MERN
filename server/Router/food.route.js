const app = require('express');
const { addFoodData, getAllFood } = require('../Controller/food.controller');
const { checkFoodExits } = require('../Services/food.Service');
const route = app.Router();

 route.post('/food/addFood',checkFoodExits,  addFoodData);
 route.get('/food/',getAllFood);

module.exports = route;