import axios from "axios";

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    return res.data;
  } catch (err) {
    throw err;
  }
}

// axios header에 access_token 넣는 함수
export function SetAuthHeader() {
  const access_token = localStorage.getItem("access_token");

  if (!access_token) {
    console.err("access_token is empty in localStorage!");
    return;
  }

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
