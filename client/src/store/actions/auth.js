import { LOGIN_USER } from "./types";

export function loginAction(data) {
  console.log("action func login");

  return {
    type: LOGIN_USER,
    payload: {
      id: data.id,
      password: data.password,
    },
  };
}
