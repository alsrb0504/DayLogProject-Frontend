import axios from "axios";

// axios가 request 시에는 자동으로 JSON 변환이 된다는데
// 서버쪽에서 받아오는 res도 자동으로 JSON.parse 처리가
// 되는 듯하다.

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    console.log("login func");

    return res.data;
  } catch {
    console.error("services/auth.js, login func error");
  }
}

export async function register(data) {
  try {
    const res = await axios.post("/api/members/new", data);

    console.log("register func");

    return res.data;
  } catch {
    console.error("services/auth.js, register func error");
  }
}
