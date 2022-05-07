import {
  SCHEDULE_ADD_FAIL,
  SCHEDULE_ADD_SUCCESS,
  SCHEDULE_CUR_SCHEDULE_SET,
  SCHEDULE_REMOVE_FAIL,
  SCHEDULE_REMOVE_SUCCESS,
  SCHEDULE_REQUEST_EMPTY,
  SCHEDULE_REQUEST_FAIL,
  SCHEDULE_REQUEST_SUCCESS,
} from "../actions/types";

const initState = {
  // month_schedules: [],

  // 로컬 테스트용
  month_schedules: [],

  cur_schedules: [],
  cur_date: "2022-05-05",
  cur_day: "Thursday",
};

const scheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case SCHEDULE_REQUEST_SUCCESS: {
      return { ...state, month_schedules: action.payload.month_schedules };
    }
    case SCHEDULE_REQUEST_EMPTY: {
      return {
        ...state,
        month_schedules: [],
      };
    }
    case SCHEDULE_REQUEST_FAIL: {
      return { ...state, month_schedules: [] };
    }
    case SCHEDULE_CUR_SCHEDULE_SET: {
      return {
        ...state,
        cur_schedules: action.payload.cur_schedules,
        cur_date: action.payload.cur_date,
        cur_day: action.payload.cur_day,
      };
    }
    case SCHEDULE_ADD_SUCCESS: {
      return {
        ...state,
        month_schedules: action.payload.month_schedules,
        cur_schedules: action.payload.cur_schedules,
      };
    }
    case SCHEDULE_ADD_FAIL: {
      return { ...state, month_schedules: [] };
    }
    case SCHEDULE_REMOVE_SUCCESS: {
      return {
        ...state,
        month_schedules: action.payload.month_schedules,
        cur_schedules: action.payload.cur_schedules,
      };
    }
    case SCHEDULE_REMOVE_FAIL: {
      return { ...state, month_schedules: [] };
    }
    default:
      return { ...state };
  }
};

export default scheduleReducer;
