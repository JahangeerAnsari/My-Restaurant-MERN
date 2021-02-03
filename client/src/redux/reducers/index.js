import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import foodReducer from "./food.Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  food: foodReducer,
});
export default rootReducer;
