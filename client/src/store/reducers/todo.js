import {
  ADD_TODO,
  GET_ONEDAY_TODO,
  REMOVE_TODO,
  CHANGE_TODO_STATE,
} from "../actions/types";

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
          todo_no: 23434,
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
  ],
  today_todos: {
    date: "2022-04-29",
    todos: [
      {
        content: "4월 29일 투두리스트 1",
        state: false,
        todo_no: 11111,
      },
      {
        content: "4월 29일 투두리스트 2",
        state: true,
        todo_no: 22222,
      },
      {
        content: "4월 29일 투두리스트 3",
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
    case CHANGE_TODO_STATE: {
      return { ...state };
    }
    case GET_ONEDAY_TODO: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default todoReducer;
