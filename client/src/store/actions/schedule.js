import axios from "axios";
import { isIncludeDate, toDayYYMM } from "../../services/calcDate";
import {
  SCHEDULE_ADD_FAIL,
  SCHEDULE_ADD_SUCCESS,
  SCHEDULE_CUR_SCHEDULE_SET,
  SCHEDULE_REMOVE_FAIL,
  SCHEDULE_REMOVE_SUCCESS,
  SCHEDULE_REQUEST_EMPTY,
  SCHEDULE_REQUEST_FAIL,
  SCHEDULE_REQUEST_SUCCESS,
} from "./types";

// date를 기준으로 해당하는 일정 배열 반환 함수.
const ClassifyDates = (scheduleArr, date) => {
  const curScheduleArr = scheduleArr.filter((schedule) =>
    isIncludeDate(date, schedule.start_date, schedule.end_date)
  );

  return curScheduleArr;
};

// 스케줄 요청 처리 함수
// (RequestCurrentSchedulesAsync)
// (RequestSchedulesAsync) 에서 공통적으로 사용.
const RequestSchedules = async (yy, mm, dispatch) => {
  const res = await axios.get(`api/schedule/calendar?month=${mm}&year=${yy}`);

  // true & false
  const haveSchedules = res.data.haveSchedules;

  // 1. 일정 정보가 존재하는 경우.
  if (haveSchedules === true) {
    let month_schedules = res.data.month_schedules;

    dispatch({
      type: SCHEDULE_REQUEST_SUCCESS,
      payload: { month_schedules },
    });
  }
  // 2. 일정 정보가 존재하지 않는 경우
  else {
    dispatch({
      type: SCHEDULE_REQUEST_EMPTY,
    });
  }
};

// 캘린더 날짜 클릭 시,
// cur_schedules를 바꾸는 action 함수.
export const SetCurSchedules =
  (date_info, day_info) => (dispatch, getState) => {
    const month_schedules = getState().schedule.month_schedules;
    const cur_schedules = ClassifyDates(month_schedules, date_info);

    dispatch({
      type: SCHEDULE_CUR_SCHEDULE_SET,
      payload: { cur_schedules, cur_date: date_info, cur_day: day_info },
    });
  };

// 홈 화면 이동 시, 현재 달의 일정 정보를 요청하는 함수.
export const RequestCurrentSchedulesAsync =
  () => async (dispatch, getState) => {
    const { yy, mm } = toDayYYMM();
    const cur_yy = Number(yy);
    const cur_mm = Number(mm);

    try {
      RequestSchedules(cur_yy, cur_mm, dispatch);
    } catch (e) {
      console.log(e);
      console.log(e.message);
      dispatch({
        type: SCHEDULE_REQUEST_FAIL,
      });
    }
  };

// 달력 이동 시, 일정 정보를 받아오는 함수.
// 전달된 선택된 날짜를 기준으로 cur_schdules 분류
export const RequestSchedulesAsync = (yy, mm) => async (dispatch, getState) => {
  try {
    RequestSchedules(yy, mm, dispatch);
  } catch (e) {
    console.log(e);
    console.log(e.message);
    dispatch({
      type: SCHEDULE_REQUEST_FAIL,
    });
  }
};

export const AddSchedulesAsync =
  (data, date, day) =>
  async (dispatch, getState, { history }) => {
    try {
      const { title, content, start_date, end_date } = data;
      const res = await axios.post("/api/schedule", {
        title,
        content,
        start_date,
        end_date,
      });

      // true & false
      const haveSchedules = res.data.haveSchedules;

      // 1. 데이터가 있을 경우만 존재?
      if (haveSchedules === true) {
        const month_schedules = res.data.month_schedules;
        const cur_schedules = ClassifyDates(month_schedules, date);

        dispatch({
          type: SCHEDULE_ADD_SUCCESS,
          payload: { month_schedules, cur_schedules },
        });
      }

      history.push(`/schedule?date=${date}&day=${day}`);
    } catch (e) {
      console.error(e);
      console.log(e.message);
      dispatch({
        type: SCHEDULE_ADD_FAIL,
      });
    }
  };

export const RemoveScheduleAsync = (idx) => async (dispatch, getState) => {
  const cur_date = getState().schedule.cur_date;

  try {
    const res = await axios.delete(`/api/schedule?no=${idx}`);

    // true & false
    const haveSchedules = res.data.haveSchedules;

    // 1. 데이터가 있을 경우만 존재?
    if (haveSchedules === true) {
      const month_schedules = res.data.month_schedules;
      const cur_schedules = ClassifyDates(month_schedules, cur_date);

      dispatch({
        type: SCHEDULE_REMOVE_SUCCESS,
        payload: { month_schedules, cur_schedules },
      });
    }
  } catch (e) {
    console.error(e.message);
    console.log(e.message);
    dispatch({
      type: SCHEDULE_REMOVE_FAIL,
    });
  }
};
