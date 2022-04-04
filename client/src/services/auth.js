import axios from "axios";

export const login = (data) => {
  const { id, password } = data;

  axios
    .post("/api/members/login", {
      id,
      password,
    })
    .then((res) => {
      console.log(res.data);
    });
};
