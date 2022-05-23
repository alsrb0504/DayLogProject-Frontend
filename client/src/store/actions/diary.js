import axios from "axios";
import {
  DIARY_ADD_FAIL,
  DIARY_ADD_SUCCESS,
  DIARY_CHANGE_SHARE_FAIL,
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
        // 사진만 FormData에 담아 먼저 보냄.
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

// 문제 : 공유 변경 수행 후, 한 번 더 변경하면 diary_no가 전달이 안 됨.
// 해결 방법 다이어리 넘버를 redux에서 그냥 가져오는 걸로 수정
export const ChangeShareDiaryAsync =
  // (diary_no) =>


    () =>
    async (dispatch, getState, { history }) => {
      // 추후 해결방법 테스트 위함.
      // console.log(diary_no);

      const selected_diary_no = getState().diary.selected_diary.diary_no;
      console.log(
        "다이어리 공유 상태 변경, 다이어리 넘버 : ",
        selected_diary_no
      );

      try {
        const res = await axios.get(`/api/diary/share?no=${selected_diary_no}`);

        const { selected_diary, month_diary, current_diary } = res.data;
        const shared_diary = ClassifyDiary(month_diary);

        dispatch({
          type: DIARY_CHANGE_SHARE_SUCCESS_FILL,
          payload: {
            month_diary,
            current_diary,
            shared_diary,
            selected_diary,
          },
        });

        // 지울 것.
        // 문제 : 공유 여부 변경이 한 번 정상적으로 수행되고 이후에는 diary_no가 전달이 되지 않는 문제 발생.
        // 해결 방법 1 : redux 를 업데이트 한 다음, 페이지를 리프레쉬
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
    try {
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

      console.log(diary);

      dispatch({
        type: DIARY_SELECT_SUCCESS,

        payload: {
          selected_diary: diary,
        },
      });

      history.push("/diary/description");
    } catch (e) {
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
    console.log("find diary calendar not found");
    return;
  }

  dispatch(SelectDiaryAsync(found.diary_no));
};
