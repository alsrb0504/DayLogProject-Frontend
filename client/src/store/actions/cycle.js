import axios from "axios";
import { changeMonthInt } from "../../services/calcDate";
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
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      
      const res = axios.post("/api/members/cycle/new", {
        start: start_date,
        cycle,
      });
      const cycle_data = res.data;
      */

      // Local test 용 주기 정보
      const cycle_data = [
        {
          start_date: "2022-05-01",
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
export const RequestCycleAsync = (mm, yy) => {
  const month = changeMonthInt(mm);

  return async (dispatch, getState, { history }) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;

      const res = axios.post(`/api/members/cycle?year=${yy}&month=${month}`);

      // 로컬 테스트용

      // 로컬 테스트용 코드 : 79 ~ 104 제거.
      // 1. 주기 정보 있는 경우.
      // const res = {
      //   data: {
      //     message: "FILL",
      //     cycle: 28,
      //     dates: [
      //       {
      //         type: "START_DATE",
      //         date: "2022-04-5",
      //       },
      //       {
      //         type: "START_DATE",
      //         date: "2022-05-03",
      //       },
      //       {
      //         type: "DUE_DATE",
      //         date: "2022-05-01",
      //       },
      //     ],
      //   },
      // };
      // 2. 주기 정보가 없는 경우
      // const res = {
      //   data: {
      //     message: "EMPTY",
      //   },
      // };

      if (res.data.message === "FILL") {
        const start_dates = [];
        const due_dates = [];

        res.data.dates.forEach((date) => {
          if (date.type === "START_DATE") {
            start_dates.push(date);
          } else if (date.type === "DUE_DATE") {
            due_dates.push(date);
          }
        });

        dispatch({
          type: CYCLE_INFO_REQUEST_SUCCESS,
          payload: {
            cycle: res.data.cycle,
            start_dates,
            due_dates,
          },
        });
      }
      // 2. 서버에 주기 정보가 없는 경우
      // 주기 정보 입력 페이지로 이동.
      else if (res.data.message === "EMPTY") {
        dispatch({ type: CYCLE_INFO_REQUEST_EMPTY });
        history.push("/menstruation");
      }
    } catch (e) {
      console.error(e);
      dispatch({ type: CYCLE_INFO_REQUEST_FAIL });
    }
  };
};
