import {
  CYCLE_CHANGE_FAIL,
  CYCLE_CHANGE_SUCCESS,
  CYCLE_INFO_REQUEST_EMPTY,
  CYCLE_INFO_REQUEST_FAIL,
  CYCLE_INFO_REQUEST_SUCCESS,
  CYCLE_TOGGLE_CHANGE,
} from "../actions/types";

const initState = {
  cycle: 0,
  start_dates: [],
  due_dates: [],
  toggled: "EMPTY", // "ON" | "OFF" | "EMPTY"
};

const cycleReducer = (state = initState, action) => {
  switch (action.type) {
    case CYCLE_CHANGE_SUCCESS: {
      const { cycle, start_dates, due_dates } = action.payload;
      return {
        ...state,
        cycle,
        start_dates,
        due_dates,
        toggled: "NO",
      };
    }
    case CYCLE_CHANGE_FAIL: {
      return {
        ...state,
        cycle: 0,
        start_dates: [],
        due_dates: [],
        toggled: "EMPTY",
      };
    }
    case CYCLE_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        cycle: action.payload.cycle,
        start_dates: action.payload.start_dates,
        due_dates: action.payload.due_dates,
        toggled: "NO",
      };
    }
    case CYCLE_INFO_REQUEST_EMPTY: {
      return {
        ...state,
        cycle: 0,
        start_dates: [],
        due_dates: [],
        toggled: "EMPTY",
      };
    }
    case CYCLE_INFO_REQUEST_FAIL: {
      return {
        ...state,
        toggled: "EMPTY",
      };
    }
    case CYCLE_TOGGLE_CHANGE: {
      return {
        ...state,
        toggled: state.toggled === "ON" ? "OFF" : "ON",
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default cycleReducer;
