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
} from "../actions/types";

const initState = {
  // 기본 상태
  month_diary: [],
  shared_diary: [],
  current_diary: [],
  selected_diary: {
    date: "2022-05-01",
    emotion: 2,
    diary_no: 13,
    like_count: 0,
    shared: false,
    content: "5월 1일 일기",
    image: "",
  },
  /*
  // 로컬 테스트 용
  month_diary: [
    {
      date: "2022-05-01",
      emotion: 2,
      diary_no: 13,
      like_count: 0,
      shared: false,
      content: "5월 1일 일기",
    },
    {
      date: "2022-05-02",
      emotion: 3,
      diary_no: 14,
      like_count: 0,
      shared: true,
      content: "5월 2일 일기",
    },
    {
      date: "2022-05-04",
      emotion: 1,
      diary_no: 504,
      like_count: 100,
      shared: false,
      content: "5월 4일 일기",
    },
    {
      date: "2022-05-06",
      emotion: 6,
      diary_no: 34,
      like_count: 12,
      shared: true,
      content: "5월 6일 일기",
    },
    {
      date: "2022-05-08",
      emotion: 3,
      diary_no: 10,
      like_count: 10,
      shared: false,
      content: "5월 8일 일기",
    },
    {
      date: "2022-05-09",
      emotion: 5,
      diary_no: 230,
      like_count: 20,
      shared: false,
      content: "5월 9일 일기",
    },
  ],
  current_diary: [
    {
      date: "2022-05-02",
      emotion: 3,
      diary_no: 14,
      like_count: 0,
      shared: true,
      content:
        "5월 2일 일기 5월 2일 일기 5월 2일 일기 5월 2일 일기 5월 2일 일기 5월 2일 일기 5월 2일 일기",
    },
    {
      date: "2022-05-04",
      emotion: 1,
      diary_no: 504,
      like_count: 100,
      shared: false,
      content: "5월 4일 일기",
    },
    {
      date: "2022-05-06",
      emotion: 6,
      diary_no: 34,
      like_count: 12,
      shared: true,
      content: "5월 6일 일기",
    },
    {
      date: "2022-05-08",
      emotion: 3,
      diary_no: 10,
      like_count: 10,
      shared: false,
      content: "5월 8일 일기",
    },
    {
      date: "2022-05-09",
      emotion: 5,
      diary_no: 230,
      like_count: 20,
      shared: false,
      content: "5월 9일 일기",
    },
  ],
  shared_diary: [
    {
      date: "2022-05-02",
      emotion: 3,
      diary_no: 14,
      like_count: 0,
      shared: true,
      content: "5월 2일 일기",
    },
    {
      date: "2022-05-06",
      emotion: 6,
      diary_no: 34,
      like_count: 12,
      shared: true,
      content: "5월 6일 일기",
    },
  ],
  */
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
    case DIARY_SELECT_SUCCESS:
    case DIARY_CHANGE_SHARE_FAIL: {
      return {
        ...state,
        selected_diary: action.payload.selected_diary,
      };
    }
    case DIARY_SELECT_FAIL:
    case DIARY_ADD_FAIL:
    case DIARY_REQUEST_FAIL:
    case DIARY_REQUEST_EMPTY:
    case DIARY_REMOVE_FAIL: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default diaryReducer;
