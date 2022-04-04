import axios from "axios";

// axios가 request 시에는 자동으로 JSON 변환이 된다는데
// 서버쪽에서 받아오는 res도 자동으로 JSON.parse 처리가
// 되는 듯하다.
export const login = (data) => {
  // const { id, password } = data;

  axios.post("/api/members/login", data).then((res) => {
    console.log(res.data);
  });
};
