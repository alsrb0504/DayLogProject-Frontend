import { LOGIN_USER, REGISTER_USER } from "../actions/types";

const initState = {
  login_result: "",
  register: "",
  user: "",
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // case LOGIN_USER: {
    //   return {
    //     ...state,
    //     login_result: action.payload.login_result,
    //   };
    // }
    case REGISTER_USER: {
      return {
        ...state,
        result: action.payload.message,
        register: action.payload.message,
      };
    }
    case "LOGIN_START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        login_result: action.payload,
        loading: false,
      };
    }
    case "LOGIN_ERROR": {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
