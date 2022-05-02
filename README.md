# DayLogProject-Frontend

프론트엔드 저장소
https://github.com/alsrb0504/CapStoneProject

백엔드 저장소
https://github.com/seunghyeonjung/DayLogProject-Backend

---

### 로그인 페이지 이동 관련

```javascript
// 선택 1
// header의 로고 클릭 => login 페이지 이동
// globalHeader.jsx 32~33 줄 => 추후 제거할 것.
// navigate("/");
navigate("/login");

// 선택 2
// app.jsx 80~84줄 주석 제거
// 토큰 없으면 자동으로 로그인 페이지 이동.
// 단 만료된 것은 보장 못 함.
const accessToken = localStorage.getItem("access_token");
if (!accessToken) navigate("/login");
```

---

### Todo

- 로그인 성공하면, 현재 달 todo 요청해서 redux 저장.

- todo 통신 시, 모든 요청에 `month_todo` 내용을 요구

  - 구현하다보니 하루씩 `todo`를 관리하기가 너무 복잡해서...

- 기존 todo api 설계에서 `투두리스트 조회`는 사용하지 않음.
- `투두리스트 캘린더 조회`에서 년도가 바뀌는 경우를 고려

  - 쿼리에 년도 정보도 같이 보내야 할 듯.

---

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
