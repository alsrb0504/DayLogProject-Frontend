import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import boardReducer from "./reducers/board";
import cycleReducer from "./reducers/cycle";
import diaryReducer from "./reducers/diary";
import scheduleReducer from "./reducers/schedule";
import signupReducer from "./reducers/signup";
import todoReducer from "./reducers/todo";
import badgeReducer from "./reducers/badge";
import qaReducer from "./reducers/qa";

// Redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CLEAR_STORE } from "./actions/types";

const appReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  todo: todoReducer,
  cycle: cycleReducer,
  schedule: scheduleReducer,
  diary: diaryReducer,
  board: boardReducer,
  badge: badgeReducer,
  qa: qaReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const initState = {};

const rootReducer = (state = initState, action) => {
  if (action.type === CLEAR_STORE) {
    return appReducer(initState, action);
  } else {
    return appReducer(state, action);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
