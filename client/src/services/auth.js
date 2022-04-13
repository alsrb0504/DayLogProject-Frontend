import axios from "axios";

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    return res.data;
  } catch (err) {
    throw err;
  }
}
