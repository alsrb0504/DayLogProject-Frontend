import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from "../actions/types";

const initState = {
  login_result: false,
  user: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
      };
    }
    case LOGIN_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        login_result: action.payload.success,
        user: action.payload.user,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        login_result: action.payload,
        user: "",
      };
    }
    default:
      return state;
  }
};

export default authReducer;
