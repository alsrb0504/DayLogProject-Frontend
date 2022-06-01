import {
  DIARY_ADD_SUCCESS,
  DIARY_ADD_FAIL,
  DIARY_REQUEST_SUCCESS,
  DIARY_REQUEST_EMPTY,
  DIARY_REQUEST_FAIL,
  DIARY_SELECT_SUCCESS,
  DIARY_SELECT_FAIL,
  DIARY_REMOVE_SUCCESS_EMPTY,
  DIARY_REMOVE_FAIL,
  DIARY_REMOVE_SUCCESS_FILL,
  DIARY_CHANGE_SHARE_FAIL,
  DIARY_CHANGE_SHARE_SUCCESS_FILL,
  DIARY_EDIT_FAIL,
  DIARY_EDIT_SUCCESS,
} from "../actions/types";

const initState = {
  // 기본 상태
  month_diary: [],
  shared_diary: [],
  current_diary: [],
  selected_diary: {},
};

const diaryReducer = (state = initState, action) => {
  switch (action.type) {
    case DIARY_REQUEST_SUCCESS: {
      const { month_diary, current_diary, shared_diary } = action.payload;
      return {
        ...state,
        month_diary,
        current_diary,
        shared_diary,
      };
    }
    case DIARY_REMOVE_SUCCESS_FILL: {
      const { month_diary, current_diary, shared_diary } = action.payload;
      return {
        ...state,
        month_diary,
        current_diary,
        shared_diary,
        selected_diary: {},
      };
    }
    case DIARY_REMOVE_SUCCESS_EMPTY: {
      return {
        ...state,
        month_diary: [],
        current_diary: [],
        selected_diary: {},
      };
    }
    case DIARY_ADD_SUCCESS: {
      const { month_diary, current_diary, shared_diary } = action.payload;
      return {
        ...state,
        month_diary,
        current_diary,
        shared_diary,
      };
    }
    case DIARY_CHANGE_SHARE_SUCCESS_FILL: {
      const { selected_diary, month_diary, current_diary, shared_diary } =
        action.payload;
      return {
        ...state,
        selected_diary,
        month_diary,
        current_diary,
        shared_diary,
      };
    }
    case DIARY_SELECT_SUCCESS:
    case DIARY_CHANGE_SHARE_FAIL: {
      return {
        ...state,
        selected_diary: action.payload.selected_diary,
      };
    }

    case DIARY_EDIT_SUCCESS: {
      return {
        ...state,
        selected_diary: action.payload.updated_diary,
      };
    }

    case DIARY_SELECT_FAIL:
    case DIARY_ADD_FAIL:
    case DIARY_REQUEST_FAIL:
    case DIARY_REQUEST_EMPTY:
    case DIARY_REMOVE_FAIL:
    case DIARY_EDIT_FAIL: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default diaryReducer;
