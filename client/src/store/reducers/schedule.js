import {
  SCHEDULE_ADD_FAIL,
  SCHEDULE_ADD_SUCCESS,
  SCHEDULE_CUR_SCHEDULE_SET,
  SCHEDULE_REQUEST_EMPTY,
  SCHEDULE_REQUEST_FAIL,
  SCHEDULE_REQUEST_SUCCESS,
} from "../actions/types";

const initState = {
  // month_schedules: [],

  // 로컬 테스트용
  month_schedules: [
    {
      schedule_no: 233,
      title: "일정 2",
      content: "캡스톤 준비",
      start_date: "2022-05-02",
      end_date: "2022-05-04",
    },
    {
      schedule_no: 213,
      title: "일정 3",
      content: "캡스톤 준비 2",
      start_date: "2022-05-05",
      end_date: "2022-05-12",
    },
  ],

  cur_schedules: [],
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
    default:
      return { ...state };
  }
};

export default scheduleReducer;
