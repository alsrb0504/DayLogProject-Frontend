import axios from "axios";
import { useCookies } from "react-cookie";
import { login, register } from "../../services/auth";
import { getAuthHeader } from "../../services/authHeader";
import { getCookie, setCookie } from "../../utils/cookie";
import { REGISTER_USER } from "./types";

export const loginActionAync =
  (data) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await login(data);
      console.log(res);

      if (res.success) {
        // 로그인 성공
        // response.body의 access_token을 로컬 스토리지에 저장
        // cookie에 httpOnly, Secure로 설정해서 refresh_token 자동 저장.
        const access_token = res.AT;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        localStorage.setItem("access_token", access_token);

        // header 포함 함수 호출
        //const test = await axios.get("/api/update", {});

        //console.log(test);

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

export function registerActionAsync(data) {
  return async (dispatch) => {
    const res = await axios.post("/api/members/new", data);

    console.log(res);

    // dispatch(registerAction(result));
  };
}
