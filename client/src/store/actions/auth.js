import { login, register } from "../../services/auth";
import { LOGIN_USER, REGISTER_USER } from "./types";

// login 결과 서버에서 토큰이든, 세션 아이디든 받아올 것.
// export function loginAction(data) {
//   // console.log("action func login");
//   return {
//     type: LOGIN_USER,
//     payload: data,
//   };
// }

export const loginActionAync =
  (data) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await login(data);

      // 여기서 로그인이 완료되면 화면 이동
      // url은 바뀌지만 login page에서 바뀌는 게 없어서
      // 직접 새로고침 해줘야 함.
      // 나중에 로딩 스피터 등의 컴포넌트를
      // 삽입해서 바꿔줘야 할 듯? (실패...)
      // window.location.reload();

      // 2번째 방법
      // LoginForm 컴포넌트에서 navigate 이용.
      history.push("/");

      dispatch({ type: "LOGIN_SUCCESS", payload: res.login_result });
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
