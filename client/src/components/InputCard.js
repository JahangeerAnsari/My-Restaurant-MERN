import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllFoodsActions } from "../redux/actions/food.action";
const InputCard = () => {
  const dispatch = useDispatch();
  ///LifeCycle METHOD
  useEffect(() => {
    dispatch(getAllFoodsActions())
      .then((res) => {
        if (res.status === 200) {
          console.log("--all food fetched->" + res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const foodReducer = useSelector((state) => state.food);
  const foodItems = foodReducer.foods;

  return foodItems.map((food) => {
    return (
      <div className="col-sm-4">
        <div className="card">
          {/* { JSON.stringify(foodItems)} */}
          <img src="images/photo.jpg" />

          <div className="card-body">
            <div className="row food-text">
              <p key={food._id} className="card-text">
                {food.name}
              </p>
              <label className="food-price">{food.price}</label>
            </div>
            <div className="food-desc">
              <label className="text-secondary text-center text-info">
                hydrabad special
              </label>
            </div>
            <div className="row card-footer">
              <i className="fa fa-heart"></i>
              <button className="btn btn-warning">Add to card</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default InputCard;
