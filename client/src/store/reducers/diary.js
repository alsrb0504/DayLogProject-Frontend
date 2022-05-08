import {
  DIARY_ADD_SUCCESS,
  DIARY_ADD_FAIL,
  DIARY_REQUEST_SUCCESS,
} from "../actions/types";

const initState = {
  // 기본 상태
  // month_diary: [],
  // shared_diary: [],
  // current_diary: [],

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
    case DIARY_ADD_SUCCESS: {
      const { month_diary, current_diary, shared_diary } = action.payload;
      return {
        ...state,
        month_diary,
        current_diary,
        shared_diary,
      };
    }
    case DIARY_ADD_FAIL: {
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};

export default diaryReducer;
