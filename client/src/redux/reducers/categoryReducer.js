import { categoryActionTypes } from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: "",
  message: "",
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case categoryActionTypes.ADD_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "Adding new categories...",
      };
      break;

    case categoryActionTypes.ADD_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case categoryActionTypes.ADD_CATEGORY_FAILURE:
      state = {
        ...state,
        message: action.payload.message,
        error: action.payload.error
      };
      break;

    case categoryActionTypes.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "Retrieving all the categories...",
      };
      break;

    case categoryActionTypes.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
        loading: false,
        message: action.payload.message,
      };
      break;

    case categoryActionTypes.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: action.payload.error,
      };
      break;

    default:
      break;
  }
  return state;
};
export default categoryReducer;
