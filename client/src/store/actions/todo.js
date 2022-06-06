import axios from "axios";
import { toDayInfo, toDayYYMM } from "../../services/calcDate";
import {
  CHANGE_TODO_STATE_FAIL,
  CHANGE_TODO_STATE_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  CHANGE_TODO_CALENDAR_SUCCESS,
  CHANGE_TODO_CALENDAR_FAIL,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAIL,
  TODO_SET_SELECTED_TODOS,
} from "./types";

// Todo 상태 변경 함수
export const changeTodoAsync = (idx) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/todolist/check?no=${idx}`);
    const month_todos = res.data;

    dispatch({
      type: CHANGE_TODO_STATE_SUCCESS,
      payload: month_todos,
    });

    const set_date = getState().todo.selected_date;
    dispatch(SetSelectedTodos(set_date));
    //
  } catch (e) {
    console.error(e);
    dispatch({ type: CHANGE_TODO_STATE_FAIL });
  }
};

// Todo popup에서 투두리스트 추가
// 내용과 날짜 전달
export const AddTodoAsync = (content, date) => async (dispatch, getState) => {
  try {
    const res = await axios.post("api/todolist", {
      date,
      content: content.content,
    });
    const month_todos = res.data;
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: month_todos,
    });

    const set_date = getState().todo.selected_date;
    dispatch(SetSelectedTodos(set_date));
    //
  } catch (e) {
    console.error(e);
    dispatch({ type: ADD_TODO_FAIL });
  }
};

// 투두 삭제 함수
export const RemoveTodoAsync = (idx) => async (dispatch, getState) => {
  console.log(idx);
  try {
    const res = await axios.delete(`api/todolist?no=${idx}`);
    const month_todos = res.data;

    dispatch({
      type: REMOVE_TODO_SUCCESS,
      payload: month_todos,
    });

    const set_date = getState().todo.selected_date;
    dispatch(SetSelectedTodos(set_date));
    //
  } catch (e) {
    console.error(e);
    dispatch({ type: REMOVE_TODO_FAIL });
  }
};

// Todo calendar에서 달 변경
// 년도가 변경될 수도 있어서 년도 정보도 같이 보내야 할 듯.
export const RequestTodosAsync = (yy, mm) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`api/todolist/calendar?month=${mm}&year=${yy}`);
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

// 홈 화면 이동 시, 현재 달의 todo 목록을 요청하고
// 오늘 날짜로 todo 를 선택하는 함수.
export const RequestCurrentTodosAsync = () => async (dispatch, getState) => {
  const { date } = toDayInfo(); // today_info.date = '2022-XX-XX'
  const { yy, mm } = toDayYYMM();
  const cur_yy = Number(yy);
  const cur_mm = Number(mm);

  try {
    const res = await axios.get(
      `api/todolist/calendar?month=${cur_mm}&year=${cur_yy}`
    );
    const month_todos = res.data;

    // 현재 달의 todos 목록 설정.
    dispatch({
      type: CHANGE_TODO_CALENDAR_SUCCESS,
      payload: month_todos,
    });

    // 오늘 날짜로 selected_todos 설정.
    dispatch(SetSelectedTodos(date));

    //
  } catch (e) {
    console.error(e);
    dispatch({ type: CHANGE_TODO_CALENDAR_FAIL });
  }
};

// 선택된 날짜의 selected_todos 를 설정하는 함수.
export const SetSelectedTodos = (set_date) => (dispatch, getState) => {
  const todoArr = getState().todo.month_todos;
  const selected_todos = todoArr.find((todo) => todo.date === set_date);

  dispatch({
    type: TODO_SET_SELECTED_TODOS,
    payload: {
      todos: selected_todos && selected_todos.todos,
      date: set_date,
    },
  });
};
