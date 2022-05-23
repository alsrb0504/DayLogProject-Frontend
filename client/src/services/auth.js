import axios from "axios";

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    return res.data;
  } catch (err) {
    throw err;
  }
}

// 로그인 성공 시, 받아 온 access 토큰을 local 스토리지에 저장 및
// axios header에 넣는 함수.
export function SetAccessToken(AT) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${AT}`;
  localStorage.setItem("access_token", AT);
}

// 로컬 스토리지에 있는 access 토클을 axios header에 넣는 함수.
export function SetAuthHeader() {
  const access_token = localStorage.getItem("access_token");

  if (!access_token) {
    console.error("로컬 스토리지에 Access 토큰이 없음!");
    return;
  }

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
