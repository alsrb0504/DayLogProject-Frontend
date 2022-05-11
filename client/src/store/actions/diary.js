import axios from "axios";
import {
  DIARY_ADD_FAIL,
  DIARY_ADD_SUCCESS,
  DIARY_REQUEST_EMPTY,
  DIARY_REQUEST_FAIL,
  DIARY_REQUEST_SUCCESS,
} from "./types";

const ClassifyDiary = (monthArr) => {
  const sharedArr = monthArr.filter((diary) => diary.shared === true);
  return sharedArr;
};

export const AddDiaryAsync =
  (date, content, image, emotion, share) =>
  async (dispatch, getState, { history }) => {
    // console.log(date, content, image, emotion, share);

    try {
      // const res = await axios.post("/api/diary", {
      //   date,
      //   content,
      //   image,
      //   emotion,
      //   share,
      // });

      // 로컬 테스트 코드
      const res = {
        data: {
          month_diary: [
            {
              date: "2022-05-01",
              emotion: 2,
              diary_no: 13,
              like_count: 0,
              shared: false,
              content: "5월 1일 일기",
            },
            {
              date: "2022-05-02",
              emotion: 3,
              diary_no: 14,
              like_count: 0,
              shared: true,
              content: "5월 2일 일기",
            },
            {
              date: "2022-05-04",
              emotion: 1,
              diary_no: 504,
              like_count: 100,
              shared: false,
              content: "5월 4일 일기",
            },
            {
              date: "2022-05-06",
              emotion: 6,
              diary_no: 34,
              like_count: 12,
              shared: true,
              content: "5월 6일 일기",
            },
            {
              date: "2022-05-08",
              emotion: 3,
              diary_no: 10,
              like_count: 10,
              shared: false,
              content: "5월 8일 일기",
            },
            {
              date: "2022-05-09",
              emotion: 5,
              diary_no: 230,
              like_count: 20,
              shared: false,
              content: "5월 9일 일기",
            },
          ],
          current_diary: [
            {
              date: "2022-05-02",
              emotion: 3,
              diary_no: 14,
              like_count: 0,
              shared: true,
              content: "5월 2일 일기",
            },
            {
              date: "2022-05-04",
              emotion: 1,
              diary_no: 504,
              like_count: 100,
              shared: false,
              content: "5월 4일 일기",
            },
            {
              date: "2022-05-06",
              emotion: 6,
              diary_no: 34,
              like_count: 12,
              shared: true,
              content: "5월 6일 일기",
            },
            {
              date: "2022-05-08",
              emotion: 3,
              diary_no: 10,
              like_count: 10,
              shared: false,
              content: "5월 8일 일기",
            },
            {
              date: "2022-05-09",
              emotion: 5,
              diary_no: 230,
              like_count: 20,
              shared: false,
              content: "5월 9일 일기",
            },
          ],
        },
      };

      const { month_diary, current_diary } = res.data;
      const shared_diary = ClassifyDiary(month_diary);

      dispatch({
        type: DIARY_ADD_SUCCESS,
        payload: {
          month_diary,
          current_diary,
          shared_diary,
        },
      });

      history.push("/diary");
    } catch (e) {
      console.error(e);
      dispatch({
        type: DIARY_ADD_FAIL,
      });
    }
  };

export const RequestDiaryAsync = (yy, mm) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/diary/calendar?year=${yy}&month=${mm}`);

    console.log(res.data);

    // 해당 달, 일기 목록이 없을 경우.
    if (res.data.message === "EMPTY") {
      dispatch({
        type: DIARY_REQUEST_EMPTY,
      });
    }

    // 해당 달, 데이터가 있는 경우.
    const { month_diary, current_diary } = res.data;
    const shared_diary = ClassifyDiary(month_diary);

    dispatch({
      type: DIARY_REQUEST_SUCCESS,
      payload: {
        month_diary,
        current_diary,
        shared_diary,
      },
    });
  } catch (e) {
    console.error(e);
    console.error(e.message);

    dispatch({
      type: DIARY_REQUEST_FAIL,
    });
  }
};
