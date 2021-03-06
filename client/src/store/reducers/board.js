import {
  BOARD_CHANGE_HEART_FAIL,
  BOARD_CHANGE_HEART_SUCCESS,
  BOARD_CHANGE_SCRAP_FAIL,
  BOARD_CHANGE_SCRAP_SUCCESS,
  BOARD_HEARTEST_FAIL,
  BOARD_HEARTEST_SUCCESS,
  BOARD_LATEST_FAIL,
  BOARD_LATEST_SUCCESS,
  BOARD_REQUEST_DIARY_FAIL,
  BOARD_REQUEST_DIARY_SUCCESS,
  BOARD_REQUEST_PROFILE_FAIL,
  BOARD_REQUEST_PROFILE_SUCCESS,
  BOARD_SCRAP_FAIL,
  BOARD_SCRAP_SUCCESS,
  BOARD_SECRET_FAIL,
  BOARD_SECRET_SUCCESS,
  BOARD_SHARE_FAIL,
  BOARD_SHARE_SUCCESS,
} from "../actions/types";

const initState = {
  category: "LATEST", // 새로고침 시, 카테고리 유지를 위해.
  diary_list: [],
  selected_diary: {},
  selected_user: {
    writer_nickname: "",
    writer_profile: "",
  },
};

const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case BOARD_LATEST_SUCCESS: {
      return {
        ...state,
        category: "LATEST",
        diary_list: action.payload.latest_diary,
      };
    }
    case BOARD_HEARTEST_SUCCESS: {
      return {
        ...state,
        category: "HEARTEST",
        diary_list: action.payload.heartest_diary,
      };
    }
    case BOARD_SECRET_SUCCESS: {
      return {
        ...state,
        category: "SECRET",

        diary_list: action.payload.secret_diary,
      };
    }
    case BOARD_SHARE_SUCCESS: {
      return {
        ...state,
        category: "SHARE",

        diary_list: action.payload.share_diary,
      };
    }
    case BOARD_SCRAP_SUCCESS: {
      return {
        ...state,
        category: "SCRAP",
        diary_list: action.payload.scrap_diary,
      };
    }
    case BOARD_REQUEST_PROFILE_SUCCESS: {
      return {
        ...state,
        diary_list: action.payload.share_diary,
        selected_user: action.payload.selected_user_info,
      };
    }
    case BOARD_REQUEST_DIARY_SUCCESS:
    case BOARD_CHANGE_HEART_SUCCESS:
    case BOARD_CHANGE_SCRAP_SUCCESS: {
      return { ...state, selected_diary: action.payload.selected };
    }
    case BOARD_LATEST_FAIL:
    case BOARD_HEARTEST_FAIL:
    case BOARD_SECRET_FAIL:
    case BOARD_SHARE_FAIL:
    case BOARD_SCRAP_FAIL:
    case BOARD_REQUEST_DIARY_FAIL:
    case BOARD_REQUEST_PROFILE_FAIL:
    case BOARD_CHANGE_HEART_FAIL:
    case BOARD_CHANGE_SCRAP_FAIL: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default boardReducer;
