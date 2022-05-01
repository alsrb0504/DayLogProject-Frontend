import axios from "axios";
import {
  CYCLE_CHANGE_FAIL,
  CYCLE_CHANGE_SUCCESS,
  CYCLE_INFO_REQUEST_EMPTY,
  CYCLE_INFO_REQUEST_FAIL,
  CYCLE_INFO_REQUEST_SUCCESS,
} from "./types";

// 생리 정보 추가 함수 (갱신);
// 시작일과 주기를 전달해서 정보를 받고 홈으로 이동.

export const changeCycleAsync = (data) => {
  const { start_date, cycle } = data;

  return async (dispatch, getState, { history }) => {
    try {
      // 주기 정보 등록(갱신) 통신 부분
      /*
      const res = axios.post("/api/members/cycle/new", {
        start: start_date,
        cycle,
      });
      const cycle_data = res.data;
      */

      // Local test 용 주기 정보
      const cycle_data = [
        {
          start: "2022-05-1",
          due_date: "2022-05-12",
          cycle: 28,
        },
        // {
        //   start_date: "2022-05-29",
        //   due_date: "2022-05-12",
        //   cycle: 28,
        // },
      ];

      dispatch({
        type: CYCLE_CHANGE_SUCCESS,
        payload: cycle_data,
      });
      history.push("/");
    } catch (e) {
      console.error(e);
      alert("생리 정보 업데이트를 실패했습니다.");
      dispatch({ type: CYCLE_CHANGE_FAIL });
      history.push("/");
    }
  };
};

// 생리 날짜 조회..
// 일단 구현 가능한지 테스트용
// 테스트 기능으로 홈에서 물방울 눌렀을 때 정보를 받아오도록 구현
// 추후에는 로그인 시, 달력 이동 시, 다른 정보들과 같이 받아올 것.
export const requestCycleAsync = () => {
  const date_info = new Date();

  const year = date_info.getFullYear();
  const month = date_info.getMonth();

  return async (dispatch, getState, { history }) => {
    try {
      // 주기 정보 요청 통신 부분
      // const res = axios.post(`/api/members/cycle?year=${year}&month=${month}`);

      // 서버 데이터 예시
      // res.data = {
      //   message: "EMPTY", // or "FILL",
      //   cycle_date: [
      //     {
      //       start_date: "2022-05-15",
      //       due_date: "2022-05-12",
      //       cycle: 28,
      //     },
      //   ],
      // };

      // 로컬 테스트용
      const res = {
        // 1. 주기 정보 있는 경우.
        data: {
          message: "FILL",
          cycle_data: {
            start_date: "2022-05-15",
            due_date: "2022-05-12",
            cycle: 28,
          },
        },

        // 2. 주기 정보 없는 경우.
        // data: {
        //   message: "EMPTY",
        //   cycle_data: [],
        // },
      };

      // 1. 서버에 주기 정보가 있는 경우
      if (res.data.message === "FILL") {
        // 통신 시, 주석 제거.
        // const cycle_data = res.data.cycle_data;

        // Local test 용 주기 정보
        const cycle_data = res.data.cycle_data;

        dispatch({
          type: CYCLE_INFO_REQUEST_SUCCESS,
          payload: cycle_data,
        });
      }
      // 2. 서버에 주기 정보가 없는 경우
      // 주기 정보 입력 페이지로 이동.
      else {
        dispatch({ type: CYCLE_INFO_REQUEST_EMPTY });
        history.push("/menstruation");
      }
    } catch (e) {
      console.error(e);
      dispatch({ type: CYCLE_INFO_REQUEST_FAIL });
    }
  };
};

const month_schedules = [
  {
    schedule_no: 123,
    title: "일정 1",
    content: "월요일 8시 정기 회의",
    start_date: "2022-05-02",
    end_date: "2022-05-02",
  },
  {
    schedule_no: 233,
    title: "일정 2",
    content: "캡스톤 준비",
    start_date: "2022-05-05",
    end_date: "2022-05-12",
  },
];
