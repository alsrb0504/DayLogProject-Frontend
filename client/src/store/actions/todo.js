import axios from "axios";
import { calcMonthYear } from "../../services/calcDate";
import {
  CHANGE_TODO_STATE_FAIL,
  CHANGE_TODO_STATE_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  CHANGE_TODO_CALENDAR_SUCCESS,
  CHANGE_TODO_CALENDAR_FAIL,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAIL,
} from "./types";
import { getAuthHeader } from '../../services/authHeader';

// Todo popup에서 체크 변경 시,
// 변경한 todo의 인덱스를 서버로 전달.
// 서버에서 해당 todo의 상태 변경 후,
// month_todos를 다시 전달 받았으면 함.
export const changeTodoAsync = (idx) => async (dispatch, getState) => {
  // console.log(idx);

  try {
    // 해당 날짜
    // const res = await axios.post(`/api/todolist/check?no=${idx}`);
    // const month_todos = res.data.todos;

    // 로컬 테스트용 month_todos 제거해야 함.
    const month_todos = [
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
            state: true,
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
    ];

    dispatch({
      type: CHANGE_TODO_STATE_SUCCESS,
      payload: month_todos,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: CHANGE_TODO_STATE_FAIL });
  }
};

// Todo popup에서 투두리스트 추가
// 내용과 날짜 전달
// 동일하게 month_todos로 바꿔서 전달받아야 하는데...
export const AddTodoAsync = (content, date) => async (dispatch, getState) => {
  console.log(content, date);

  try {
    // const res = await axios.post("api/todolipostst", {
    //   date,
    //   content,
    // });
    // const month_todos = res.data.todos;

    const month_todos = [
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
            state: true,
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
          {
            content: "4월 30일 추가한 투두리스트",
            state: false,
            todo_no: 44444,
          },
        ],
      },
    ];

    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: month_todos,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADD_TODO_FAIL });
  }
};

export const RemoveTodoAsync = (idx) => async (dispatch, getState) => {
  console.log(idx);
  try {
    // const res = await axios.delete(`api/todolipostst?no=${idx}`);
    // const month_todos = res.data.todos;

    const month_todos = [
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
    ];

    dispatch({
      type: REMOVE_TODO_SUCCESS,
      payload: month_todos,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: REMOVE_TODO_FAIL });
  }
};

// Todo calendar에서 달 변경
// 년도가 변경될 수도 있어서 년도 정보도 같이 보내야 할 듯.
export const changeTodoCalendar =
  (text, month, year) => async (dispatch, getState) => {
    const { yy, mm } = calcMonthYear(text, month, year);

    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem('access_token')}`;
      const res = await axios.get(`api/todolist/calendar?month=${mm}&year=${yy}`);
      console.log(res.data);
      const month_todos = res.data;  

      dispatch({
        type: CHANGE_TODO_CALENDAR_SUCCESS,
        payload: month_todos,
      });
    } catch (e) {
      console.error(e);
      dispatch({ type: CHANGE_TODO_CALENDAR_FAIL });
    }
  };
