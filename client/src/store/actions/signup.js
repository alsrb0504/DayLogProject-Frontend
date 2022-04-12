import axios from "axios";
import {
  SIGNUP_EMAIL,
  SIGNUP_ID_FAIL,
  SIGNUP_ID_START,
  SIGNUP_ID_SUCCESS,
  SIGNUP_NAME,
  SIGNUP_NICKNAME,
  SIGNUP_PASSWD,
  SIGNUP_START,
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
      const res = await axios.post("/api/members/idCheck", { id: id.id });

      console.log(res);
      // 중복된 아이디가 없다면 => existed === false?? true??
      if (res.data.success === true) {
        dispatch({
          type: SIGNUP_ID_SUCCESS,
          payload: id,
        });

        history.push("signup/password");
      } else {
        alert("이미 존재하는 아이디 입니다.");
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

// 마지막 이름 등록 함수
// 이름 등록 후, 자동으로 signupAsync 까지 호출하면 좋겠지만
// 함수 당 하나의 기능만 수행하도록 고려해서 이름 저장 기능만 구현.
export const signupName = (name) => {
  return {
    type: SIGNUP_NAME,
    payload: name,
  };
};

// 회원등록 함수
export const signupAsync =
  () =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: SIGNUP_START });

    const userData = getState().signupReducer;

    try {
      await axios.post("/api/members/new", userData);
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };
