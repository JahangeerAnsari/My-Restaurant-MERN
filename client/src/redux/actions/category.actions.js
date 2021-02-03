import AxiosInstance from "../axios";
import M from "materialize-css";
import { categoryActionTypes } from "./actionTypes";

export const addCategoryAction = (category) => async (dispatch) => {
  dispatch({
    type: categoryActionTypes.ADD_CATEGORY_REQUEST,
  });
  return await AxiosInstance.post("/category/add", category).then((res) => {
    if (res.status === 201) {
      const { message, category } = res.data;
      const msg = `${res.data.category.name} has added successfully!`;
      M.toast({ html: msg, classes: "toast success" });

      dispatch({
        type: categoryActionTypes.ADD_CATEGORY_SUCCESS,
        payload: {
          category: category,
          message: message,
        },
      });
    } else {
      const { error, message } = res.data;
      M.toast({ html: message, classes: "toast error" });
      dispatch({
        type: categoryActionTypes.ADD_CATEGORY_FAILURE,
        payload: {
          message: message,
          error: error,
        },
      });
    }
    return res;
  });
};

export const getAllCategories = () => async (dispatch) => {
  dispatch({
    type: categoryActionTypes.GET_ALL_CATEGORIES_REQUEST,
  });
  return await AxiosInstance.get("/categories/getAll/").then((res) => {
    if (res.status === 200) {
      const { categories, message } = res.data;
      dispatch({
        type: categoryActionTypes.GET_ALL_CATEGORIES_SUCCESS,
        payload: {
          categories,
          message,
        },
      });
    } else {
      const { message, error } = res.data;
      M.toast({ html: message, classes: "toast error" });
      dispatch({
        type: categoryActionTypes.GET_ALL_CATEGORIES_FAILURE,
        payload: {
          message,
          error,
        },
      });
    }
  });
};
