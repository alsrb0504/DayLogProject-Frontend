import { GET_ONEDAY_TODO } from "./types";

export const getOneDayTodos = (date) => {
  return {
    type: GET_ONEDAY_TODO,
    payload: {
      date,
    },
  };
};
