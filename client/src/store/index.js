import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import boardReducer from "./reducers/board";
import cycleReducer from "./reducers/cycle";
import diaryReducer from "./reducers/diary";
import scheduleReducer from "./reducers/schedule";
import signupReducer from "./reducers/signup";
import todoReducer from "./reducers/todo";

// Redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  todo: todoReducer,
  cycle: cycleReducer,
  schedule: scheduleReducer,
  diary: diaryReducer,
  board: boardReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
