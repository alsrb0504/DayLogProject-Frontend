import axios from "axios";

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    return res.data;
  } catch (err) {
    throw err;
  }
}

// 로그인 후, localStorage에 access_token 저장 함수
// 지금은 로그인 성공 후, action 함수에서 넣어버림.
// 나중에 구현
export function SetAuthHeader() {
  const access_token = localStorage.getItem("access_token");

  if (!access_token) return;

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}

export function getAuthHeader() {
  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    return {
      Authorization: `Bearer ${access_token}`,
    };
  } else {
    return {};
  }
}
