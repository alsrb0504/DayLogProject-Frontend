import {
  CHANGE_TODO_STATE_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  CHANGE_TODO_STATE_FAIL,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAIL,
  CHANGE_TODO_CALENDAR_SUCCESS,
  CHANGE_TODO_CALENDAR_FAIL,
} from "../actions/types";

// 월간 todos : month_todos 와
// 일간 todos : selected_day_todos
// 일간 todos는 기본값으로는 서버에서 오늘 날짜의 todos 목록을
// 주고 만약 캘린더에서 선택하면 해당 날짜의 todos로
// 자체 selected_day_todos 업데이트.
const initState = {
  month_todos: [],

  // 추후 달력 넘어갈 때, todo 사라지는 거 보완하기 위해.
  selected_todos: {},
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS: {
      return { ...state, month_todos: action.payload };
    }
    case ADD_TODO_FAIL: {
      return { ...state };
    }
    case REMOVE_TODO_SUCCESS: {
      return { ...state, month_todos: action.payload };
    }
    case REMOVE_TODO_FAIL: {
      return { ...state };
    }
    case CHANGE_TODO_STATE_SUCCESS: {
      return { ...state, month_todos: action.payload };
    }
    case CHANGE_TODO_STATE_FAIL: {
      return { ...state };
    }
    case CHANGE_TODO_CALENDAR_SUCCESS: {
      console.log(action.payload);
      return { ...state, month_todos: action.payload };
    }
    case CHANGE_TODO_CALENDAR_FAIL: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default todoReducer;
