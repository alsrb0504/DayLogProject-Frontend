import {
  CHANGE_PASSWD_ERROR,
  CHANGE_PASSWD_FAIL,
  CHANGE_PASSWD_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_IMAGE_FAIL,
  PROFILE_UPDATE_SUCCESS,
  RESIGN_FAIL,
  RESIGN_SUCCESS,
} from "../actions/types";

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

    case LOGOUT_USER:
    case CHANGE_PASSWD_SUCCESS:
    case RESIGN_SUCCESS: {
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

    case PROFILE_UPDATE_SUCCESS: {
      const { name, nickname, email, profile_image_url } = action.payload;
      return {
        ...state,
        name,
        nickname,
        email,
        profile_image_url,
      };
    }

    case PROFILE_UPDATE_IMAGE_FAIL:
    case PROFILE_UPDATE_FAIL:
    case CHANGE_PASSWD_FAIL:
    case CHANGE_PASSWD_ERROR:
    case RESIGN_FAIL: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default authReducer;
