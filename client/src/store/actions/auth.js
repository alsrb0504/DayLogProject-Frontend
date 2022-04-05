import { login, register } from "../../services/auth";
import { LOGIN_USER, REGISTER_USER } from "./types";

// login 결과 서버에서 토큰이든, 세션 아이디든 받아올 것.
export function loginAction(data) {
  // console.log("action func login");
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function loginActionAync(data) {
  return async (dispatch) => {
    const result = await login(data);
    dispatch(loginAction(result));
  };
}

function registerAction(data) {
  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function registerActionAsync(data) {
  return async (dispatch) => {
    const result = await register(data);

    dispatch(registerAction(result));
  };
}
