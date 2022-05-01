import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import cycleReducer from "./reducers/cycle";
import signupReducer from "./reducers/signup";
import todoReducer from "./reducers/todo";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  todo: todoReducer,
  cycle: cycleReducer,
});

export default rootReducer;
