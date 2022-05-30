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

// 홈 화면 접속 시, todo 목록을 받아오는 함수
//

export const changeTodoAsync = (idx) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/todolist/check?no=${idx}`);
    const month_todos = res.data;

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
    const res = await axios.post("api/todolist", {
      date,
      content: content.content,
    });
    const month_todos = res.data;
    console.log(month_todos);
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
    const res = await axios.delete(`api/todolist?no=${idx}`);
    const month_todos = res.data;

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
