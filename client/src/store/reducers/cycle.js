import {
  CYCLE_CHANGE_FAIL,
  CYCLE_CHANGE_SUCCESS,
  CYCLE_INFO_REQUEST_EMPTY,
  CYCLE_INFO_REQUEST_FAIL,
  CYCLE_INFO_REQUEST_SUCCESS,
} from "../actions/types";

const initState = {
  month_cycle: [],

  /* 주기 정보 양식
    {
      start_date: "",
      due_date: "",
      cycle: "",
    };
*/
};

const cycleReducer = (state = initState, action) => {
  switch (action.type) {
    case CYCLE_CHANGE_SUCCESS: {
      return {
        ...state,
        month_cycle: action.payload,
      };
    }
    case CYCLE_CHANGE_FAIL: {
      return {
        ...state,
      };
    }
    case CYCLE_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        month_cycle: action.payload,
      };
    }
    case CYCLE_INFO_REQUEST_EMPTY: {
      return {
        ...state,
        month_cycle: [],
      };
    }
    case CYCLE_INFO_REQUEST_FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default cycleReducer;
