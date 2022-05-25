import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_USER } from "../actions/types";

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

    case LOGOUT_USER: {
      return {
        ...state,
        login_result: "FAIL",
        name: "",
        nickname: "",
        profile_image_url: null,
        email: "",
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        login_result: "FAIL",
        name: "",
        nickname: "",
        profile_image_url: null,
        email: "",
      };
    }
    default:
      return state;
  }
};

export default authReducer;
