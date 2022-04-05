import { LOGIN_USER } from "../actions/types";

const initState = {
  id: "",
  password: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
