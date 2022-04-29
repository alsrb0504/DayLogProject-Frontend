import axios from "axios";
import {
  CHANGE_TODO_STATE_FAIL,
  CHANGE_TODO_STATE_START,
  CHANGE_TODO_STATE_SUCCESS,
  GET_ONEDAY_TODO,
} from "./types";

export const getOneDayTodos = (date) => {
  return {
    type: GET_ONEDAY_TODO,
    payload: {
      date,
    },
  };
};

export const changeTodoAsync = (idx) => async (dispatch, getState) => {
  console.log(idx);

  dispatch({
    type: CHANGE_TODO_STATE_START,
  });

  try {
    // 서버에 상태 변경되었다고 알림
    // 받아올 필요가 없긴 한데..
    // 프론트에서는 상태가 변경된 것이 저장됨.
    // 근데 새로고침하면 이 상태가 날라가는데
    // 새로고침 시, 다시 todolist 전체 요청? 아니면
    // 이 통신을 통해 상태 변경 후, 다시 업데이트?
    // 다시 업데이트가 좋을 거 같은데

    // 서버에서 인덱스를 받아서 해당 날짜의
    // 업데이트 된 todos 목록을 받아와 줬으면 좋겠는데
    // 인덱스만 가지고 찾을 수 있을까?
    // 날짜도 같이 보내줘야 하나..

    // 해당 날짜
    // const res = await axios.post(`/api/todolist/check?todo=${idx}`);
    // const todos = res.data.todos;

    // 로컬 테스트용 todos 제거해야 함.
    const todos = {
      date: "2022-04-29",
      todos: [
        {
          content: "4월 29일 투두리스트 1",
          state: true,
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
    };

    dispatch({
      type: CHANGE_TODO_STATE_SUCCESS,
      payload: todos,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: CHANGE_TODO_STATE_FAIL });
  }
};
