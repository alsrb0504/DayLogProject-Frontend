import {
  SCHEDULE_REQUEST_FAIL,
  SCHEDULE_REQUEST_SUCCESS,
} from "../actions/types";

const initState = {
  month_scheduls: [],
};

const scheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case SCHEDULE_REQUEST_SUCCESS: {
      console.log(action);
      console.log(action.payload);

      return { ...state, month_scheduls: action.payload };
    }
    case SCHEDULE_REQUEST_FAIL: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default scheduleReducer;
