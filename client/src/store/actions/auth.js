import axios from "axios";
import { login } from "../../services/auth";
import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from "./types";

export const loginActionAync =
  (data) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: LOGIN_START });

    try {
      const res = await login(data);

      // access 토큰과 유저 name 확인용 확인용.
      console.log(res);

      // 로그인 성공
      // response.body의 access_token을 로컬 스토리지에 저장
      // cookie에 httpOnly, Secure로 설정해서 refresh_token 자동 저장.
      if (res.success) {
        const access_token = res.AT;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        localStorage.setItem("access_token", access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: res });
        history.push("/");
      } else {
        // 로그인 실패
        // 통신은 성공, 비밀번호나 아이디가 틀린 경우
        // console.log(res.message.sqlMessage);
        console.error(res);
        dispatch({ type: LOGIN_ERROR, payload: res.success });
        alert(`로그인 실패 : ${res.message}`);
      }
    } catch {
      // 로그인 통신 실패
      dispatch({ type: LOGIN_ERROR, payload: false });
      alert(`로그인 실패 : 서버 통신 문제`);
    }
  };
