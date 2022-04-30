import { CYCLE_CHANGE_FAIL, CYCLE_CHANGE_SUCCESS } from "../actions/types";

const initState = {
  start_date: "",
  due_date: "",
  cycle: "",
};

const cycleReducer = (state = initState, action) => {
  switch (action.type) {
    case CYCLE_CHANGE_SUCCESS: {
      const { start_date, due_date, cycle } = action.payload;
      return {
        ...state,
        start_date,
        due_date,
        cycle,
      };
    }
    case CYCLE_CHANGE_FAIL: {
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
