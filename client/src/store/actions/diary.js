import axios from "axios";
import {
  DIARY_ADD_FAIL,
  DIARY_ADD_SUCCESS,
  DIARY_CHANGE_SHARE_FAIL,
  DIARY_CHANGE_SHARE_SUCCESS_EMPTY,
  DIARY_CHANGE_SHARE_SUCCESS_FILL,
  DIARY_REMOVE_FAIL,
  DIARY_REMOVE_SUCCESS_EMPTY,
  DIARY_REMOVE_SUCCESS_FILL,
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
      // 1번째 요청 : 일기 추가 데이터만 보내는
      let res = {};
      res = await axios.post("/api/diary", {
        content,
        date,
        emotion,
        share,
      });

      // 2번째 요청 : 사진이 있는 경우.
      // res를 사진 추가된 버전의 response 응답으로 변경.
      if (image !== undefined) {
        // 1. 사진만 FormData에 담아 먼저 보냄.
        const formData = new FormData();
        formData.append("image", image);

        res = await axios({
          method: "post",
          url: "/api/diary/image",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        /* 나중에 FormData 문제 시, 확인을 위한 코드 
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      */
      }

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
      history.push("/diary");
    }
  };

export const RemoveDiaryAsync =
  (diary_no) =>
  async (dispatch, getState, { history }) => {
    console.log(diary_no);

    try {
      const res = await axios.delete(`/api/diary?no=${diary_no}`);

      // 해당 달, 일기 목록이 없을 경우.
      if (res.data.message === "EMPTY") {
        dispatch({
          type: DIARY_REMOVE_SUCCESS_EMPTY,
        });
      }

      // 해당 달, 데이터가 있는 경우.
      const { month_diary, current_diary } = res.data;
      const shared_diary = ClassifyDiary(month_diary);

      dispatch({
        type: DIARY_REMOVE_SUCCESS_FILL,
        payload: {
          month_diary,
          current_diary,
          shared_diary,
        },
      });

      history.push("/diary");
    } catch (e) {
      console.error(e);

      console.log("diary remove action fail");
      dispatch({
        type: DIARY_REMOVE_FAIL,
      });
    }
  };

export const ChangeShareDiaryAsync =
  (diary_no) =>
  async (dispatch, getState, { history }) => {
    console.log(diary_no);

    try {
      const res = await axios.get(`/api/diary/share?no=${diary_no}`);

      // 회의 후 다시 구현.

      // 해당 달, 일기 목록이 없을 경우.
      if (res.data.message === "EMPTY") {
        dispatch({
          type: DIARY_CHANGE_SHARE_SUCCESS_EMPTY,
        });
      }

      // 해당 달, 데이터가 있는 경우.
      const { month_diary, current_diary } = res.data;
      const shared_diary = ClassifyDiary(month_diary);

      dispatch({
        type: DIARY_CHANGE_SHARE_SUCCESS_FILL,
        payload: {
          month_diary,
          current_diary,
          shared_diary,
        },
      });

      history.push("/diary");

      // 현재 페이지로 다시 와야 하는데
      // 쿼리로 구분해줘야 하나?
      // history.push("/diary/description");
    } catch (e) {
      console.error(e);

      console.log("diary change share action fail");
      dispatch({
        type: DIARY_CHANGE_SHARE_FAIL,
      });

      history.push("/diary");
    }
  };

export const RequestDiaryAsync = (yy, mm) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/diary/calendar?year=${yy}&month=${mm}`);

    console.log(res.data);

    /*const res = {
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
    };*/

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
  (diary_idx) =>
  async (dispatch, getState, { history }) => {
    console.log(diary_idx);
    try {
      //
      const res = await axios.get(`/api/diary?no=${diary_idx}`);

      const { member_id, date, content, emotion, shared, image, diary_no } =
        res.data;

      const diary = {
        member_id,
        date,
        content,
        emotion,
        shared,
        image,
        diary_no,
      };

      dispatch({
        type: DIARY_SELECT_SUCCESS,

        payload: {
          selected_dairy: diary,
        },
      });

      history.psuh("/diary/description");

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
