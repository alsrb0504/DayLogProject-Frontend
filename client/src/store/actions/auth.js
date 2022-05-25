import axios from "axios";
import { login, SetAccessToken } from "../../services/auth";
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_USER } from "./types";

export const loginActionAync =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await login(user_info);

      // 로그인 성공 시,
      // access 토큰을 로컬 스토리지에 저장.
      // cookie에 httpOnly, Secure로 설정해서 refresh_token 자동 저장.
      // 유저 정보를 redux에 저장.

      console.log("test1");

      if (data.success) {
        const { isFirst, AT, name, nickname, profile_image_url, email } = data;
        SetAccessToken(AT);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            name,
            nickname,
            profile_image_url,
            email,
          },
        });

        console.log(data);
        console.log("isFirst", isFirst);

        // 오늘 처음 로그인 했다면 Q&A로 이동.
        if (isFirst) {
          console.log("test2");

          history.psuh("/attendance");
        } else {
          history.push("/");
        }

        console.log("test3");
      }

      // 로그인 실패
      // 통신은 성공, 비밀번호나 아이디가 틀린 경우
      else {
        console.log("test4");
        console.error(data);
        dispatch({ type: LOGIN_ERROR, payload: data.success });
        alert(`로그인 실패 : ${data.message}`);
      }
    } catch {
      console.log("test5");

      // 로그인 통신 실패
      dispatch({ type: LOGIN_ERROR, payload: false });
      alert(`로그인 실패 : 서버 통신 문제`);
    }
  };

// 추후 손 봐야할듯.
export const Logout =
  () =>
  (dispatch, getState, { history }) => {
    axios.delete("/api/members/logout");

    localStorage.clear();

    dispatch({
      type: LOGOUT_USER,
    });

    history.push("/login");
  };
