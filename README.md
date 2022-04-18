# DayLogProject-Frontend

프론트엔드 저장소
https://github.com/alsrb0504/CapStoneProject

백엔드 저장소
https://github.com/seunghyeonjung/DayLogProject-Backend

### 로그아웃

- 테스트 조건

  - 로그인을 한 상태에서 메인 페이지의 아래에 Logout 버튼 존재.

- 코드 위치 : "/src/pages/Home/home.jsx", 19번째 줄

```javascript
// home.jsx 19번째 줄
// localStrage의 access_token을 지우고. ( + 나중에 header에서 access 토큰도 빼야 함.)
// logout api를 호출하여 refresh 토큰을 지움.
const onLogout = async () => {
  localStorage.clear();

  // 로그아웃 api 호출.
  // 성공 후에 cookie에 refresh 토큰이 없는 것을 확인해야 함.
  await axios.delete("/api/members/logout");

  navigate("/login");
};
```
