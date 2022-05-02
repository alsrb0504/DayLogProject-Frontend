import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import cycleReducer from "./reducers/cycle";
import scheduleReducer from "./reducers/schedule";
import signupReducer from "./reducers/signup";
import todoReducer from "./reducers/todo";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  todo: todoReducer,
  cycle: cycleReducer,
  schedule: scheduleReducer,
});

export default rootReducer;
