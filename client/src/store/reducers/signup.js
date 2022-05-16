import {
  SIGNUP_EMAIL,
  SIGNUP_ID_FAIL,
  SIGNUP_ID_START,
  SIGNUP_ID_SUCCESS,
  SIGNUP_NAME,
  SIGNUP_NICKNAME,
  SIGNUP_PASSWD,
} from "../actions/types";

const initState = {
  id: "",
  password: "",
  email: "",
  nickname: "",
  name: "name",
  loading: false,
};

const signupReducer = (state = initState, action) => {
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
    case SIGNUP_PASSWD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case SIGNUP_EMAIL: {
      return {
        ...state,
        email: action.payload.email,
      };
    }
    case SIGNUP_NICKNAME: {
      return {
        ...state,
        nickname: action.payload.nickname,
      };
    }
    case SIGNUP_NAME: {
      console.log(action.payload);
      return {
        ...state,
        name: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
};

export default signupReducer;
