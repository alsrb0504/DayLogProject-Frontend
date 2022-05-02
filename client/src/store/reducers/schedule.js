import {
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
      end_date: "2022-05-4",
    },
    {
      schedule_no: 213,
      title: "일정 3",
      content: "캡스톤 준비 2",
      start_date: "2022-05-05",
      end_date: "2022-05-12",
    },
  ],
};

const scheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case SCHEDULE_REQUEST_SUCCESS: {
      return { ...state, month_schedules: action.payload };
    }
    case SCHEDULE_REQUEST_FAIL: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default scheduleReducer;
