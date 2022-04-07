import { login, register } from "../../services/auth";
import { REGISTER_USER } from "./types";

export const loginActionAync =
  (data) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await login(data);

      // 테스트 토큰 : (id: aa, password: 1234)
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJfa…zM2fQ.GzlqwE9eDyZv4ixWhSXBtwZ5Eg1f_XvZmaKgyKvX1Ig
      console.log(res);
      console.log(res.message);

      if (res.login_result) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res });
        history.push("/");
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: res });
        alert(`로그인 실패 : ${res.message}`);
      }
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };

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
