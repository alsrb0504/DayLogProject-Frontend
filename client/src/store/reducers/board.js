import { BOARD_LATEST_FAIL, BOARD_LATEST_SUCCESS } from "../actions/types";

const initState = {
  diary_list: [],
  selected_diary: {},
  selected_user: {},
};

const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case BOARD_LATEST_SUCCESS: {
      return { ...state, diary_list: action.payload.latest_diary };
    }
    case BOARD_LATEST_FAIL:
    default: {
      return { ...state };
    }
  }
};

export default boardReducer;
