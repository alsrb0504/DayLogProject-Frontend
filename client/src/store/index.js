import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import signupReducer from "./reducers/signup";

const rootReducer = combineReducers({ authReducer, signupReducer });

export default rootReducer;
