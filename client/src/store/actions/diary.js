import axios from "axios";
import {
  DIARY_ADD_FAIL,
  DIARY_ADD_SUCCESS,
  DIARY_CHANGE_SHARE_FAIL,
  DIARY_CHANGE_SHARE_SUCCESS_FILL,
  DIARY_EDIT_FAIL,
  DIARY_EDIT_SUCCESS,
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
      // if (image !== undefined) {
      if (image.length !== 0) {
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
      //
    } catch (e) {
      console.error(e.response);
      const { status, data } = e.response;

      dispatch({
        type: DIARY_ADD_FAIL,
      });

      if (status === 401) {
        alert(data.message);
      } else {
        alert(`일기 추가 실패 : 서버 통신 문제`);
      }
    }
  };

export const RemoveDiaryAsync =
  (diary_no) =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await axios.delete(`/api/diary?no=${diary_no}`);

      // 해당 달, 일기 목록이 없을 경우.
      if (res.data.message === "EMPTY") {
        dispatch({
          type: DIARY_REMOVE_SUCCESS_EMPTY,
        });

        history.push("/diary");
      }

      // 해당 달, 데이터가 있는 경우.
      else {
        const { month_diary, current_diary } = res.data;
        const shared_diary = ClassifyDiary(month_diary);

        // dispatch가 먼저 실행되면 Selected_diary가 없어져서
        // diaryDescription에서 문제 발생.
        // => 페이지 이동 먼저 실행해야 함.
        history.push("/diary");

        dispatch({
          type: DIARY_REMOVE_SUCCESS_FILL,
          payload: {
            month_diary,
            current_diary,
            shared_diary,
          },
        });
      }

      //
    } catch (e) {
      console.error(e);

      console.log("diary remove action fail");
      dispatch({
        type: DIARY_REMOVE_FAIL,
      });
    }
  };

export const ChangeShareDiaryAsync =
  () =>
  async (dispatch, getState, { history }) => {
    const selected_diary_no = getState().diary.selected_diary.diary_no;
    console.log("다이어리 공유 상태 변경, 다이어리 넘버 : ", selected_diary_no);

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
    } catch (e) {
      console.error(e);
      console.log("diary change share action fail");
      alert("일기 공유 상태 변경 실패");
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
      const { member_id, date, content, emotion, shared, image_url, diary_no } =
        res.data;

      const diary = {
        member_id,
        date,
        content,
        emotion,
        shared,
        image_url,
        diary_no,
      };

      dispatch({
        type: DIARY_SELECT_SUCCESS,

        payload: {
          selected_diary: diary,
        },
      });

      history.push(`/diary/description`);
      // history.push(`/diary/description?prev=${prev ? `${prev}` : "diary"}`);
    } catch (e) {
      console.error(e);
      console.error(e.message);

      dispatch({
        type: DIARY_SELECT_FAIL,
      });
    }
  };

// 공유 게시판에서 자기 일기 선택 함수.
// 각각 쿼리에 /board로 갈지, board/mypage로 갈지 선택.
export const SelectDiaryFromBoardAsync =
  (diary_idx, pathArr) =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await axios.get(`/api/diary?no=${diary_idx}`);
      const { member_id, date, content, emotion, shared, image_url, diary_no } =
        res.data;

      const diary = {
        member_id,
        date,
        content,
        emotion,
        shared,
        image_url,
        diary_no,
      };

      dispatch({
        type: DIARY_SELECT_SUCCESS,

        payload: {
          selected_diary: diary,
        },
      });

      if (pathArr.length === 2) {
        // history.push(`/board`);
        history.push(`/diary/description?prev=board`);
      } else if (pathArr.length === 3) {
        history.push(`/diary/description?prev=board/myPage`);
      } else {
        throw new Error("게시판 자기 일기 선택 에러");
      }
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

// 일기 수정 함수
export const EditDiaryAsync =
  (edit_diary) =>
  async (dispatch, getState, { history }) => {
    const {
      edited_date,
      edited_content,
      edited_shared,
      edited_emotion,
      edited_image_url,
    } = edit_diary;

    const edit_diary_no = getState().diary.selected_diary.diary_no;
    const selected_diary = getState().diary.selected_diary;

    try {
      // 1번째 요청 : 사진을 변경했다면 사진 변경 요청
      if (edited_image_url && edited_image_url.length !== 0) {
        // if (edited_image_url) {
        const formData = new FormData();
        formData.append("image", edited_image_url);

        const img_res = await axios({
          method: "post",
          url: `/api/diary/image/change?no=${edit_diary_no}`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (img_res.data.message !== true) {
          console.error("사진 변경 실패");
          dispatch({
            type: DIARY_EDIT_FAIL,
          });
        }
      }

      // 2번째 요청 : 변경된 유저 정보 전달
      const res = await axios.post(`/api/diary/change?no=${edit_diary_no}`, {
        date: edited_date,
        content: edited_content,
        emotion: edited_emotion,
        share: edited_shared,
      });

      const { diary_no, member_id, date, content, emotion, shared, image_url } =
        res.data.edited_diary;

      const updated_diary = {
        ...selected_diary,
        date,
        member_id,
        emotion,
        diary_no,
        shared,
        content,
        image_url,
      };

      // 결과 확인용.
      // console.log("update_diary :", updated_diary);

      dispatch({
        type: DIARY_EDIT_SUCCESS,
        payload: {
          updated_diary,
        },
      });

      history.push("/diary/description");
      //
    } catch (e) {
      alert("일기 수정 실패");
      console.error("일기 수정 실패");
      dispatch({
        type: DIARY_EDIT_FAIL,
      });
    }
  };
