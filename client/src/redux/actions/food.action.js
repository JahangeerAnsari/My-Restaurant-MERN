import AxiosInstance from "../axios";

import { foodActionTypes } from "./actionTypes";
import M from "materialize-css";

export const foodActions = (food) => async (dispatch) => {
  dispatch({
    type: foodActionTypes.ADD_FOOD_REQUEST,
  });
  const res = await AxiosInstance.post("/food/addFood", food);
  console.log(res);
  if (res.status === 201) {
    const { food, message } = res.data;
    const msg = `${food.name} has added successfully!`;
    M.toast({ html: msg, classes: "toast success" });
    dispatch({
      type: foodActionTypes.ADD_FOOD_SUCCESS,
      payload: {
        food: food,
        message: message,
      },
    });
  }
  if (res.status === 400) {
    const { error, message } = res.data;
    M.toast({ html: message, classes: "toast error" });
    dispatch({
      type: foodActionTypes.ADD_FOOD_FAILURE,
      payload: {
        message,
        error,
      },
    });
  } else {
    M.toast({ html: res.data.message, classes: "toast warning" });
  }
  return res;
};

export const getAllFoodsActions = () => async (dispatch) => {
  dispatch({
    type: foodActionTypes.GET_FOOD_REQUEST,
  });

  return await AxiosInstance.get("/food/").then((res) => {
    if (res.status === 200) {
      console.log("---get food-->" + res);
      const { foods, message } = res.data;
      const msg = `Data has fetched successfully!`;
      M.toast({ html: msg, classes: "toast success" });
      dispatch({
        type: foodActionTypes.GET_FOOD_SUCCESS,
        payload: {
          foods: foods,
          message: message,
        },
      });
    }
    if (res.status === 400) {
      const { food, message } = res.data;
      const msg = `${food.name} has error!`;
      M.toast({ html: msg, classes: "toast warning" });
      dispatch({
        type: foodActionTypes.GET_FOOD_FAILURE,
        payload: {
          food: food,
          message: message,
        },
      });
    }
    return res;
  });
};
