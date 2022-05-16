import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from "../actions/types";

const initState = {
  login_result: false,
  user: "",
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        login_result: action.payload.success,
        user: action.payload.user,
        loading: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        login_result: action.payload,
        user: "",
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
