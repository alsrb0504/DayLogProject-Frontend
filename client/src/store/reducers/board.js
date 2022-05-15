import {
  BOARD_HEARTEST_FAIL,
  BOARD_HEARTEST_SUCCESS,
  BOARD_LATEST_FAIL,
  BOARD_LATEST_SUCCESS,
  BOARD_SECRET_FAIL,
  BOARD_SECRET_SUCCESS,
} from "../actions/types";

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
    case BOARD_HEARTEST_SUCCESS: {
      return { ...state, diary_list: action.payload.heartest_diary };
    }
    case BOARD_SECRET_SUCCESS: {
      return { ...state, diary_list: action.payload.secret_diary };
    }
    case BOARD_LATEST_FAIL:
    case BOARD_HEARTEST_FAIL:
    case BOARD_SECRET_FAIL:
    default: {
      return { ...state };
    }
  }
};

export default boardReducer;
