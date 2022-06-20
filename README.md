# DayLogProject-Frontend

홈 저장소
https://github.com/alsrb0504/CapStoneProject

백엔드 저장소
https://github.com/seunghyeonjung/DayLogProject-Backend

### 폴더 및 파일 구조
```
client
├── public
└── src
    ├── assets            # 프로젝트에서 사용한 뱃지, 아이콘, 이모지 등을 모아둔 폴더
    ├── components        # 반복적으로 사용되는 컴포넌트들을 모아둔 폴더
    ├── pages             # 페이지별로 큰 틀을 잡기위한 jsx 파일들을 모아둔 폴더
    ├── services          # 인증, 날짜 계산, 달력 등 기능별로 필요한 함수들을 정의한 폴더
    ├── store             # redux 관련 action 과 reducer 파일을 정의한 폴더
    ├── styles            # Sass 관련 styles을 정의한 폴더
    ├── utils             # cookie 사용을 위한 폴더
    ├── app.jsx
    ├── app.scss
    ├── index.js
    ├── index.js
    └── setupProxy.js     # 서버와 연결하기 위한 proxy 설정 관련 함수
```

### 사용 라이브러리
- fullcalendar/react
- react-router-dom v6
- react-hook-form
- node-sass
- redux
- redux-thunk
- redux-persist

### 실행 방법
```
// 서버 먼저 실행 후,
cd client
npm start
```
