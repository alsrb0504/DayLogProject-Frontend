import axios from "axios";
import { login, SetAccessToken } from "../../services/auth";
import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from "./types";

export const loginActionAync =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: LOGIN_START });

    try {
      const data = await login(user_info);

      // 로그인 성공 시,
      // access 토큰을 로컬 스토리지에 저장.
      // cookie에 httpOnly, Secure로 설정해서 refresh_token 자동 저장.
      if (data.success) {
        const { AT } = data;
        SetAccessToken(AT);

        dispatch({ type: LOGIN_SUCCESS, payload: data });
        history.push("/");
      }
      // 로그인 실패
      // 통신은 성공, 비밀번호나 아이디가 틀린 경우
      else {
        console.error(data);
        dispatch({ type: LOGIN_ERROR, payload: data.success });
        alert(`로그인 실패 : ${data.message}`);
      }
    } catch {
      // 로그인 통신 실패
      dispatch({ type: LOGIN_ERROR, payload: false });
      alert(`로그인 실패 : 서버 통신 문제`);
    }
  };
