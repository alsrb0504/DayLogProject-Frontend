import axios from "axios";
import { changeMonthInt, toDayYYMM } from "../../services/calcDate";
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

  console.log(dateArr);
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
  return async (dispatch, getState, { history }) => {
    try {
      RequestCycles(yy, mm, dispatch, history);
    } catch (e) {
      console.error(e);
      dispatch({ type: CYCLE_INFO_REQUEST_FAIL });
    }
  };
};

// 추후에는 로그인 시, 달력 이동 시, 다른 정보들과 같이 받아올 것.
export const RequestCurrentCycleAsync = () => {
  const { yy, mm } = toDayYYMM();
  const cur_yy = Number(yy);
  const cur_mm = Number(mm);

  return async (dispatch, getState, { history }) => {
    try {
      RequestCycles(cur_yy, cur_mm, dispatch, history);
    } catch (e) {
      console.error(e);
      dispatch({ type: CYCLE_INFO_REQUEST_FAIL });
    }
  };
};

const RequestCycles = async (yy, mm, dispatch, history) => {
  const res = await axios.post(`/api/members/cycle?year=${yy}&month=${mm}`);

  // // res.data.message = "FILL" or "EMPTY"
  // // 1. 서버에 주기 정보가 있는 경우
  if (res.data.message === "FILL") {
    const { startArr, dueArr } = ClassifyDates(res.data.cycle_data.dates);

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
};
