import axios from "axios";
import { login, SetAccessToken } from "../../services/auth";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  RESIGN_FAIL,
  RESIGN_SUCCESS,
} from "./types";

export const loginActionAync =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await login(user_info);

      // 로그인 성공 시,
      // access 토큰을 로컬 스토리지에 저장.
      // cookie에 httpOnly, Secure로 설정해서 refresh_token 자동 저장.
      // 유저 정보를 redux에 저장.
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

        // 오늘 처음 로그인 했다면 Q&A로 이동.
        if (isFirst) {
          history.push("/attendance");
        } else {
          history.push("/");
        }
      }

      // 로그인 실패
      // 통신은 성공, 비밀번호나 아이디가 틀린 경우
      else {
        console.error(data);
        dispatch({ type: LOGIN_ERROR, payload: data.success });
        alert(`로그인 실패 : ${data.message}`);
      }
    } catch (e) {
      console.error(e);
      console.error("로그인 실패");
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

export const ResignRequestAsync =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await axios.delete("/api/members");

      dispatch({
        type: RESIGN_SUCCESS,
      });
      alert("회원 탈퇴 성공");
      history.push("/login");
    } catch (e) {
      console.error(e);
      alert("회원 탈퇴 실패");

      dispatch({
        type: RESIGN_FAIL,
      });
    }
  };
