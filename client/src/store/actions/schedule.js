import axios from "axios";
import { calcMonthYear } from "../../services/calcDate";
import { SCHEDULE_REQUEST_FAIL, SCHEDULE_REQUEST_SUCCESS } from "./types";

export const RequestSchedules =
  (text, month, year) => async (dispatch, getState) => {
    const { yy, mm } = calcMonthYear(text, month, year);

    try {
      /*
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      const res = await axios.get(
        `api/schedule/calendar?month=${mm}&year=${yy}`
      );

      // 확인용.
      console.log(res.data);

      // true & false
      const haveSchdeuls = res.data.haveSchedules;
      */

      // 로컬 테스트용
      const res = {
        data: {
          haveSchedules: true,
          month_schedules: [
            {
              schedule_no: 233,
              title: "일정 2",
              content: "캡스톤 준비",
              start_date: "2022-05-02",
              end_date: "2022-05-4",
            },
            {
              schedule_no: 213,
              title: "일정 3",
              content: "캡스톤 준비 2",
              start_date: "2022-05-05",
              end_date: "2022-05-12",
            },
          ],
        },
      };
      const haveSchdeuls = false;

      let month_schedules = [];
      if (haveSchdeuls) {
        month_schedules = res.data.month_schedules;
      }

      dispatch({
        type: SCHEDULE_REQUEST_SUCCESS,
        payload: month_schedules,
      });
    } catch (e) {
      console.log(e);
      console.log(e.message);
      dispatch({
        type: SCHEDULE_REQUEST_FAIL,
      });
    }
  };
