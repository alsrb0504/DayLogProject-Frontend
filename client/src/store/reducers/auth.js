import { LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/types";

const initState = {
  login_result: false,
  name: "",
  nickname: "",
  profile_image_url: null,
  email: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { name, nickname, profile_image_url, email } = action.payload;
      return {
        ...state,
        login_result: "SUCCESS",
        name,
        nickname,
        profile_image_url,
        email,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        login_result: "FAIL",
      };
    }
    default:
      return state;
  }
};

export default authReducer;
