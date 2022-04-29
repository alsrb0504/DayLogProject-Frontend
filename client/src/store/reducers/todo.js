import {
  ADD_TODO,
  GET_ONEDAY_TODO,
  REMOVE_TODO,
  CHANGE_TODO_STATE_START,
  CHANGE_TODO_STATE_SUCCESS,
} from "../actions/types";

// 월간 todos : month_todos 와
// 일간 todos : selected_day_todos
// 일간 todos는 기본값으로는 서버에서 오늘 날짜의 todos 목록을
// 주고 만약 캘린더에서 선택하면 해당 날짜의 todos로
// 자체 selected_day_todos 업데이트.
const initState = {
  month_todos: [
    {
      date: "2022-04-01",
      todos: [
        {
          content: "4월 1일 투두리스트 1",
          state: false,
          todo_no: 13224,
        },
        {
          content: "4월 1일 투두리스트 2",
          state: false,
          todo_no: 23144,
        },
        {
          content: "4월 1일 투두리스트 3",
          state: true,
          todo_no: 56454,
        },
        {
          content: "4월 1일 투두리스트 4",
          state: false,
          todo_no: 25463,
        },
      ],
    },
    {
      date: "2022-04-18",
      todos: [
        {
          content: "4월 18일 투두리스트 1",
          state: false,
          todo_no: 23534,
        },
        {
          content: "4월 18일 투두리스트 2",
          state: true,
          todo_no: 23434,
        },
        {
          content: "4월 18일 투두리스트 3",
          state: false,
          todo_no: 12345,
        },
      ],
    },
    {
      date: "2022-04-30",
      todos: [
        {
          content: "4월 30일 투두리스트 1",
          state: false,
          todo_no: 11111,
        },
        {
          content: "4월 30일 투두리스트 2",
          state: true,
          todo_no: 22222,
        },
        {
          content: "4월 30일 투두리스트 3",
          state: false,
          todo_no: 33333,
        },
      ],
    },
  ],
  // today_todos: {
  //   date: "2022-04-29",
  //   todos: [
  //     {
  //       content: "4월 29일 투두리스트 1",
  //       state: false,
  //       todo_no: 11111,
  //     },
  //     {
  //       content: "4월 29일 투두리스트 2",
  //       state: true,
  //       todo_no: 22222,
  //     },
  //     {
  //       content: "4월 29일 투두리스트 3",
  //       state: false,
  //       todo_no: 33333,
  //     },
  //   ],
  // },
  selected_day_todos: {
    date: "2022-04-30",
    todos: [
      {
        content: "4월 30일 투두리스트 1",
        state: false,
        todo_no: 11111,
      },
      {
        content: "4월 30일 투두리스트 2",
        state: true,
        todo_no: 22222,
      },
      {
        content: "4월 30일 투두리스트 3",
        state: false,
        todo_no: 33333,
      },
    ],
  },
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state };
    }
    case REMOVE_TODO: {
      return { ...state };
    }
    case CHANGE_TODO_STATE_START: {
      return { ...state };
    }
    case CHANGE_TODO_STATE_SUCCESS: {
      console.log(action);
      return { ...state, selected_day_todos: action.payload };
    }
    case GET_ONEDAY_TODO: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default todoReducer;
