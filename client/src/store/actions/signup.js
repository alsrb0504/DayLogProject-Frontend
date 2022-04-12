import axios from "axios";
import {
  SIGNUP_EMAIL,
  SIGNUP_ID_FAIL,
  SIGNUP_ID_START,
  SIGNUP_ID_SUCCESS,
  SIGNUP_NAME,
  SIGNUP_NICKNAME,
  SIGNUP_PASSWD,
} from "./types";

export function signupId(id) {
  console.log("action func in ", id);

  return {
    type: SIGNUP_ID_START,
    payload: id,
  };
}

export const signupIdAsync =
  (id) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: SIGNUP_ID_START });

    try {
      // 서버와 통신할 때 주석 지움.
      // const res = await axios.post("/api/members/idCheck", { id });
      const res = {
        existed: true,
      };

      // 중복된 아이디가 없다면 => existed === false?? true??
      if (res.existed) {
        dispatch({
          type: SIGNUP_ID_SUCCESS,
          payload: id,
        });

        history.push("signup/password");
      } else {
        console.log("이미 존재하는 아아디");
        dispatch({ type: SIGNUP_ID_FAIL });
      }
    } catch (e) {
      console.log(e);
      console.log("통신 실페");
      dispatch({ type: SIGNUP_ID_FAIL });
    }
  };

export const signupPasswd = (password) => {
  return {
    type: SIGNUP_PASSWD,
    payload: password,
  };
};

export const signupEmail = (email) => {
  return {
    type: SIGNUP_EMAIL,
    payload: email,
  };
};

export const signupNickname = (nickname) => {
  return {
    type: SIGNUP_NICKNAME,
    payload: nickname,
  };
};

export const signupName = (name) => {
  return {
    type: SIGNUP_NAME,
    payload: name,
  };
};
