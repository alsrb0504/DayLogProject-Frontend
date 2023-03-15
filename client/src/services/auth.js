import axios from "axios";

export function CheckLogin() {
  const access_token = localStorage.getItem("access_token");

  return access_token ? true : false;
}

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AutoLogin(navigate) {
  // 자동 로그인
  axios
    .post("/api/autoLogin")
    .then((res) => {
      const { id, name } = res.data;
      console.log(id, name);
    })
    .catch((e) => {
      console.error(e.response.status);
      const err_message = e.response.data.message;

      // Access_token이 만료된 경우
      // refresh 토큰을 이용하여 access 토큰 재발급.
      // 그 외의 경우는 다시 로그인
      // 1. access 토큰이 변조됨.
      // 2. access 토큰이 변조됨.
      // 3. refresh 토큰 만료 or 변조.
      if (e.response.status === 401) {
        axios.get("/api/update").then((res) => {
          console.log(res.data);
          localStorage.setItem("access_token", res.data.AT);
        });
      } else {
        alert(`로그인 오류 ${err_message}`);
        navigate("/login");
      }
    });
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
    return;
  }

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
