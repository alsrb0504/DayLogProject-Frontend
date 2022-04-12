import { REGISTER_USER } from "../actions/types";

const initState = {
  login_result: "",
  register: "",
  user: "",
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
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
      console.log(action.payload);
      return {
        ...state,
        login_result: action.payload.success,
        user: action.payload.user,
        loading: false,
      };
    }
    case "LOGIN_ERROR": {
      return {
        ...state,
        login_result: action.payload,
        user: "",
        loading: false,
      };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
