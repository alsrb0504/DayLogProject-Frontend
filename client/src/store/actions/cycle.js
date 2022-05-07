import axios from "axios";
import { changeMonthInt } from "../../services/calcDate";
import {
  CYCLE_CHANGE_FAIL,
  CYCLE_CHANGE_SUCCESS,
  CYCLE_INFO_REQUEST_EMPTY,
  CYCLE_INFO_REQUEST_FAIL,
  CYCLE_INFO_REQUEST_SUCCESS,
} from "./types";

// 서버로부터 전달받은 (시작, 예정일) 날짜들 분류 함수
const ClassifyDates = (dateArr) => {
  const startArr = [];
  const dueArr = [];

  dateArr.forEach((date) => {
    if (date.type === "START_DATE") {
      startArr.push(date);
    } else if (date.type === "DUE_DATE") {
      dueArr.push(date);
    }
  });

  return { startArr, dueArr };
};

// 생리 정보 추가 함수 (갱신);
export const RequestCycleAsync = (data) => {
  const { start_date, cycle } = data;

  return async (dispatch, getState, { history }) => {
    try {
      // 주기 정보 등록(갱신) 통신 부분
      const res = await axios.post("/api/members/cycle/new", {
        start: start_date,
        cycle,
      });

      const { startArr, dueArr } = ClassifyDates(res.data.cycle_data.dates);

      dispatch({
        type: CYCLE_CHANGE_SUCCESS,
        payload: {
          cycle: res.data.cycle_data.cycle,
          start_dates: startArr,
          due_dates: dueArr,
        },
      });
      history.push("/");
    } catch (e) {
      console.error(e);
      console.error(e.data.message);

      if (e.message === 400) {
        alert(e.data.message);
      } else {
        alert("생리 정보 업데이트를 실패했습니다.");
      }

      dispatch({ type: CYCLE_CHANGE_FAIL });
      history.push("/");
    }
  };
};

// 추후에는 로그인 시, 달력 이동 시, 다른 정보들과 같이 받아올 것.
export const ChangeCycleAsync = (mm, yy) => {
  const month = changeMonthInt(mm);

  return async (dispatch, getState, { history }) => {
    try {
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${localStorage.getItem("access_token")}`;

      // const res = axios.post(`/api/members/cycle?year=${yy}&month=${month}`);

      // 로컬 테스트용 코드 : 79 ~ 104 제거.
      // 1. 주기 정보 있는 경우.
      const res = {
        data: {
          message: "FILL",
          cycle: 28,
          dates: [
            {
              type: "START_DATE",
              date: "2022-05-15",
            },
            {
              type: "START_DATE",
              date: "2022-05-04",
            },
            {
              type: "DUE_DATE",
              date: "2022-05-27",
            },
          ],
        },
      };
      // 2. 주기 정보가 없는 경우
      // const res = {
      //   data: {
      //     message: "EMPTY",
      //   },
      // };

      if (res.data.message === "FILL") {
        const { startArr, dueArr } = ClassifyDates(res.data.dates);

        dispatch({
          type: CYCLE_INFO_REQUEST_SUCCESS,
          payload: {
            cycle: res.data.cycle,
            start_dates: startArr,
            due_dates: dueArr,
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

export const CycleToggleEmpty = () => {};
