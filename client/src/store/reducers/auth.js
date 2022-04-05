import { LOGIN_USER, REGISTER_USER } from "../actions/types";

const initState = {
  result: "",
  register: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        result: action.payload,
      };
    }
    case REGISTER_USER: {
      console.log("authreducer register user");
      return {
        ...state,
        result: action.payload.message,
        register: action.payload.message,
      };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
