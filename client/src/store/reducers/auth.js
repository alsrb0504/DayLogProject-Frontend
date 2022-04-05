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

    default:
      return { ...state };
  }
};

export default authReducer;
