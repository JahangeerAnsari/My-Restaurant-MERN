const {
  
  foodActionTypes,
} = require("../actions/actionTypes");
const { foodActions } = require("../actions/food.action");

const initialState = {
  food: null,
  loading: false,
  error: "",
  message: "",
  foods: []
};
const foodReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case foodActionTypes.ADD_FOOD_REQUEST:
      state = {
        ...state,
        loading: true,
        message: "food adding process started",
      };
      break;

    case foodActionTypes.ADD_FOOD_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case foodActionTypes.ADD_FOOD_FAILURE:
      state = {
        ...state,
        message: "something went wrong",
      };
      break;
    case foodActionTypes.GET_FOOD_REQUEST:
      state ={
        ...state,
        loading: true,
        message: 'food details feaching start'
      };
      break;
      case foodActionTypes.GET_FOOD_SUCCESS:
        state ={
          ...state,
          loading: false,
          message: action.payload.message,
          foods: action.payload.foods
        };
        break;
        case foodActionTypes.GET_FOOD_FAILURE:
          state ={
            ...state,
            message: 'something went wrong'
          };
          break
    default:
      break;
  }
  return state;
};
module.exports = foodReducer;
