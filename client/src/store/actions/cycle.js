import axios from "axios";
import { CYCLE_CHANGE_FAIL, CYCLE_CHANGE_SUCCESS } from "./types";

// 생리 정보 추가 함수
// 시작일과 주기를 전달해서 정보를 받고 홈으로 이동.
export const changeCycleAsync = (data) => {
  const { start_date, cycle } = data;

  return async (dispatch, getState, { history }) => {
    try {
      // 주기 정보 등록(갱신) 통신 부분
      /*
      const res = axios.post("/api/members/cycle/new", {
        start: start_date,
        cycle,
      });
      const cycle_data = res.data;
      */

      // Local test 용 주기 정보
      const cycle_data = {
        start_date: "2022-05-15",
        due_date: "2022-05-12",
        cycle: 28,
      };

      dispatch({
        type: CYCLE_CHANGE_SUCCESS,
        payload: cycle_data,
      });
      history.push("/");
    } catch (e) {
      console.error(e);
      alert("생리 정보 업데이트를 실패했습니다.");
      dispatch({ type: CYCLE_CHANGE_FAIL });
      history.push("/");
    }
  };
};
