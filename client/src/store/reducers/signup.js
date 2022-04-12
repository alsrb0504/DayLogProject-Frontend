import {
  SIGNUP_ID_FAIL,
  SIGNUP_ID_START,
  SIGNUP_ID_SUCCESS,
} from "../actions/types";

const initState = {
  id: "",
  password: "",
  email: "",
  nickname: "",
  name: "",
  loading: false,
};

const signupReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case SIGNUP_ID_START: {
      return { ...state, loading: true };
    }
    case SIGNUP_ID_SUCCESS: {
      return {
        ...state,
        id: action.payload.id,
        loading: false,
      };
    }
    case SIGNUP_ID_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default signupReducer;
