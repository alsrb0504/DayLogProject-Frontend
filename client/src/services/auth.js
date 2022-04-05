import axios from "axios";

// axios가 request 시에는 자동으로 JSON 변환이 된다는데
// 서버쪽에서 받아오는 res도 자동으로 JSON.parse 처리가
// 되는 듯하다.

export async function login(data) {
  try {
    const res = await axios.post("/api/members/login", data);

    if (res.data.message === "login connect") {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }

  // 유저 설정 setUser
  // 리덕스 사용?
  // 로그인 결과 true / false 로 반환?
  // 세션에 먼저 해보자 : 어제 띄어놓은 글 참고

  // return res;
}
