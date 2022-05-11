import axios from "axios";
import {
  DIARY_ADD_FAIL,
  DIARY_ADD_SUCCESS,
  DIARY_REQUEST_EMPTY,
  DIARY_REQUEST_FAIL,
  DIARY_REQUEST_SUCCESS,
  DIARY_SELECT_FAIL,
  DIARY_SELECT_SUCCESS,
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
    // const res = await axios.get(`/api/diary/calendar?year=${yy}&month=${mm}`);

    // console.log(res.data);

    const res = {
      data: {
        message: "FILL",
        month_diary: [
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

export const SelectDiaryAsync =
  (diary_no) =>
  async (dispatch, getState, { history }) => {
    console.log(diary_no);
    try {
      //
      const res = await axios.get(`/api/diary?no=${diary_no}`);

      const diary = res.data;

      // 기존 다이어리 데이터에서
      // 작성자 id 와 image url 추가.

      // 로컬 테스트 용
      const test_diary = {
        member_id: "aa",
        image: "", // 서버에 저장된 이미지의 주소

        date: "2022-05-03",
        emothion: 1, // 1 ~ 7
        diary_no: 333,
        like_count: 100,
        share: true,
        content: "일기 내용",
      };

      dispatch({
        type: DIARY_SELECT_SUCCESS,

        payload: {
          // selected_dairy: diary,
          selected_dairy: test_diary,
        },
      });

      // 해당 조회 페이지로 이동.
      // 쿼리로 정보 줘도 괜찮고
      // 안줘도 redux에 정보 있어서 괜찮.
      // history()
    } catch (e) {
      // 없을 경우 에러로 주었으면 함.

      console.error(e);
      console.error(e.message);

      dispatch({
        type: DIARY_SELECT_FAIL,
      });
    }
  };

export const FindDiaryCalendar = (date) => (dispatch, getState) => {
  const month_diary = getState().diary.month_diary;
  const found = month_diary.find((diary) => diary.date === date);

  // 해당 날짜에 일기가 없는 경우
  if (!found) {
    // console.log("not found");
    return;
  }

  dispatch(SelectDiaryAsync(found.diary_no));
};
