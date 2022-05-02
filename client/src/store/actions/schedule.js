import axios from "axios";
import { calcMonthYear } from "../../services/calcDate";
import {
  SCHEDULE_ADD_FAIL,
  SCHEDULE_ADD_SUCCESS,
  SCHEDULE_REQUEST_FAIL,
  SCHEDULE_REQUEST_SUCCESS,
} from "./types";

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

export const AddSchedules =
  (data) =>
  async (dispatch, getState, { history }) => {
    try {
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${localStorage.getItem("access_token")}`;

      // console.log(data);

      // const res = await axios.post("api/schedule/", {
      //   data,
      // });

      // 확인용.
      // console.log(res.data);

      // true & false
      // const haveSchdeuls = res.data.haveSchedules;

      // if (haveSchdeuls) {
      //   month_schedules = res.data.month_schedules;
      // }

      // 로컬 테스트용
      const haveSchdeuls = true;
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
            {
              schedule_no: 243,
              title: "추가된 일정",
              content: "추가",
              start_date: "2022-05-10",
              end_date: "2022-05-24",
            },
          ],
        },
      };

      let month_schedules = [];
      if (haveSchdeuls) {
        month_schedules = res.data.month_schedules;
      }

      console.log(month_schedules);

      dispatch({
        type: SCHEDULE_ADD_SUCCESS,
        payload: month_schedules,
      });

      history.push("/");
    } catch (e) {
      console.error(e);
      console.log(e.message);
      dispatch({
        type: SCHEDULE_ADD_FAIL,
      });
    }
  };
