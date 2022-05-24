import axios from "axios";
import {
  BOARD_CHANGE_HEART_FAIL,
  BOARD_CHANGE_HEART_SUCCESS,
  BOARD_CHANGE_SCRAP_FAIL,
  BOARD_CHANGE_SCRAP_SUCCESS,
  BOARD_HEARTEST_FAIL,
  BOARD_HEARTEST_SUCCESS,
  BOARD_LATEST_FAIL,
  BOARD_LATEST_SUCCESS,
  BOARD_REQUEST_DIARY_FAIL,
  BOARD_REQUEST_DIARY_SUCCESS,
  BOARD_REQUEST_PROFILE_FAIL,
  BOARD_REQUEST_PROFILE_SUCCESS,
  BOARD_SCRAP_FAIL,
  BOARD_SCRAP_SUCCESS,
  BOARD_SECRET_FAIL,
  BOARD_SECRET_SUCCESS,
  BOARD_SHARE_FAIL,
  BOARD_SHARE_SUCCESS,
} from "./types";

// 최신순 조회 요청 함수
export const RequestLatestBoardAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/board/latest");
    const { latest_diary } = res.data;

    // 테스트용
    // const latest_diary = [
    //   {
    //     diary_no: 13,
    //     content: "일기 내용...",
    //     image_url: "http://image.png",
    //     like_count: 100,
    //     date: "2022-05-01",
    //   },
    //   {
    //     diary_no: 14,
    //     content: "일기 내용 2...",
    //     image_url: null,
    //     like_count: 30,
    //     date: "2022-05-03",
    //   },
    // ];

    dispatch({
      type: BOARD_LATEST_SUCCESS,
      payload: {
        latest_diary,
      },
    });
  } catch (e) {
    console.error(e);

    alert("최신순 조회 실패");
    console.log("Request Latest Board Async func fail");

    dispatch({
      type: BOARD_LATEST_FAIL,
    });
  }
};

// 좋아요 순 조회 요청 함수
export const RequestHeartestBoardAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/board/heart");
    const { heartest_diary } = res.data;

    // 테스트용
    // const heartest_diary = [
    //   {
    //     diary_no: 13,
    //     content: "좋아요 일기 내용",
    //     image_url: null,
    //     like_count: 100,
    //     date: "2022-05-01",
    //   },
    //   {
    //     diary_no: 14,
    //     content: "좋아요 일기 내용 2...",
    //     image_url: null,
    //     like_count: 290,
    //     date: "2022-05-03",
    //   },
    //   {
    //     diary_no: 15,
    //     content: "좋아요 일기 내용 3...",
    //     image_url: null,
    //     like_count: 300,
    //     date: "2022-05-03",
    //   },
    // ];

    dispatch({
      type: BOARD_HEARTEST_SUCCESS,
      payload: {
        heartest_diary,
      },
    });
  } catch (e) {
    console.error(e);

    alert("좋아요 순 조회 실패");
    console.log("Request Heartest Board Async func fail");

    dispatch({
      type: BOARD_HEARTEST_FAIL,
    });
  }
};

// 마이 비밀 일기 조회 요청 함수
export const RequestSecretBoardAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/board/mypage/secret");
    const { secret_diary } = res.data;

    // 테스트용
    // const secret_diary = [
    //   {
    //     diary_no: 13,
    //     content: "비밀 일기 내용",
    //     image_url: null,
    //     like_count: 100,
    //     date: "2022-05-01",
    //   },
    //   {
    //     diary_no: 14,
    //     content: "비밀 일기 내용 2...",
    //     image_url: null,
    //     like_count: 290,
    //     date: "2022-05-03",
    //   },
    //   {
    //     diary_no: 15,
    //     content: "비밀 일기 내용 3...",
    //     image_url: null,
    //     like_count: 300,
    //     date: "2022-05-03",
    //   },
    // ];

    dispatch({
      type: BOARD_SECRET_SUCCESS,
      payload: {
        secret_diary,
      },
    });
  } catch (e) {
    console.error(e);

    alert("비밀 일기 조회 실패");
    console.log("Request Secret Board Async func fail");

    dispatch({
      type: BOARD_SECRET_FAIL,
    });
  }
};

// 마이 공유 일기 조회 요청 함수
export const RequestShareBoardAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/board/mypage/share");
    const { share_diary } = res.data;

    // 테스트용
    // const share_diary = [
    //   {
    //     diary_no: 13,
    //     content: "공유 일기 내용",
    //     image_url: null,
    //     like_count: 100,
    //     date: "2022-05-01",
    //   },
    //   {
    //     diary_no: 14,
    //     content: "공유 일기 내용 2...",
    //     image_url: null,
    //     like_count: 290,
    //     date: "2022-05-03",
    //   },
    //   {
    //     diary_no: 15,
    //     content: "공유 일기 내용 3...",
    //     image_url: null,
    //     like_count: 300,
    //     date: "2022-05-03",
    //   },
    // ];

    dispatch({
      type: BOARD_SHARE_SUCCESS,
      payload: {
        share_diary,
      },
    });
  } catch (e) {
    console.error(e);

    alert("공유 일기 조회 실패");
    console.log("Request Share Board Async func fail");

    dispatch({
      type: BOARD_SHARE_FAIL,
    });
  }
};

// 마이 스크랩 일기 조회 요청 함수
export const RequestScrapBoardAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/board/mypage/scrap");
    const { scrap_diary } = res.data;

    // 테스트용
    // const scrap_diary = [
    //   {
    //     diary_no: 13,
    //     content: "스크랩 일기 내용",
    //     image_url: null,
    //     like_count: 100,
    //     date: "2022-05-01",
    //   },
    //   {
    //     diary_no: 14,
    //     content: "스크랩 일기 내용 2...",
    //     image_url: null,
    //     like_count: 290,
    //     date: "2022-05-03",
    //   },
    //   {
    //     diary_no: 15,
    //     content: "스크랩 일기 내용 3...",
    //     image_url: null,
    //     like_count: 300,
    //     date: "2022-05-03",
    //   },
    // ];

    dispatch({
      type: BOARD_SCRAP_SUCCESS,
      payload: {
        scrap_diary,
      },
    });
  } catch (e) {
    console.error(e);

    alert("스크랩 일기 조회 실패");
    console.log("Request Scrap Board Async func fail");

    dispatch({
      type: BOARD_SCRAP_FAIL,
    });
  }
};

// 타인의 일기 조회 요청 함수
export const RequestBoardDiaryAsync =
  (selected_diary_no) =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await axios.get(`/api/board/diary?no=${selected_diary_no}`);
      const { selected } = res.data;

      // 테스트용
      // const selected = {
      //   diary_no: 13,
      //   content: "선택된 일기 내용...",
      //   image_url: null,
      //   like_count: 100,
      //   date: "2022-05-01",
      //   writer_id: "user01",
      //   writer_nickname: "닉네임01",
      //   writer_profile_url: null,
      //   is_liked: true,
      //   is_shared: false,
      // };

      dispatch({
        type: BOARD_REQUEST_DIARY_SUCCESS,
        payload: {
          selected,
        },
      });

      // 게시글 상세 페이지로 이동.
      history.push(`/board/description?no=${selected.diary_no}`);
    } catch (e) {
      console.error(e);

      alert("타인의 일기 하나 조회 요청 실패");
      console.log("타인의 일기 하나 조회 요청 실패");

      dispatch({
        type: BOARD_REQUEST_DIARY_FAIL,
      });
    }
  };

// 타인의 프로필 조회 요청 함수
export const RequestBoardProfileAsync =
  (user_id) =>
  async (dispatch, getState, { history }) => {
    try {
      console.log(user_id);
      const res = await axios.get(`/api/board/profile?name=${user_id}`);
      const { writer_nickname, writer_profile, share_diary } = res.data;

      // 테스트용
      // const writer_nickname = "닉네임01";
      // const writer_profile = null;
      // const share_diary = [
      //   {
      //     diary_no: 13,
      //     content: "닉네임01이 공유한 일기 내용...",
      //     image_url: null,
      //     like_count: 100,
      //     date: "2022-05-01",
      //   },
      //   {
      //     diary_no: 14,
      //     content: "닉네임01이 공유한 일기 내용 2...",
      //     image_url: null,
      //     like_count: 30,
      //     date: "2022-05-03",
      //   },
      // ];

      dispatch({
        type: BOARD_REQUEST_PROFILE_SUCCESS,
        payload: {
          share_diary,
          selected_user_info: {
            writer_nickname,
            writer_profile,
          },
        },
      });

      // 유저 프로필 페이지로 이동.
      history.push(`/board/other?writer_nickname=${writer_nickname}`);
    } catch (e) {
      console.error(e);

      alert("타인의 프로필 조회 요청 실패");
      console.log("타인의 프로필 조회 요청 실패");

      dispatch({
        type: BOARD_REQUEST_PROFILE_FAIL,
      });
    }
  };

// 게시글 좋아요 상태 변경 요청 함수
export const ChangeHeartStateAsync =
  (selected_diary_no) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/board/like?no=${selected_diary_no}`);
      const { selected } = res.data;

      // 테스트용
      // const selected = {
      //   diary_no: 13,
      //   content: "선택된 일기 내용...",
      //   image_url: null,
      //   like_count: 100,
      //   date: "2022-05-01",
      //   writer_id: "user01",
      //   writer_nickname: "닉네임01",
      //   writer_profile_url: null,
      //   is_liked: false,
      //   is_shared: false,
      // };

      dispatch({
        type: BOARD_CHANGE_HEART_SUCCESS,
        payload: {
          selected,
        },
      });
    } catch (e) {
      console.error(e);

      alert("좋아요 상태 변경 요청 실패");
      console.log("좋아요 상태 변경 요청 실패");

      dispatch({
        type: BOARD_CHANGE_HEART_FAIL,
      });
    }
  };

// 게시글 스크랩 상태 변경 요청 함수
export const ChangeScrapStateAsync =
  (selected_diary_no) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/board/scrap?no=${selected_diary_no}`);
      const { selected } = res.data;

      // 테스트용
      // const selected = {
      //   diary_no: 13,
      //   content: "선택된 일기 내용...",
      //   image_url: null,
      //   like_count: 100,
      //   date: "2022-05-01",
      //   writer_id: "user01",
      //   writer_nickname: "닉네임01",
      //   writer_profile_url: null,
      //   is_liked: false,
      //   is_shared: true,
      // };

      dispatch({
        type: BOARD_CHANGE_SCRAP_SUCCESS,
        payload: {
          selected,
        },
      });
    } catch (e) {
      console.error(e);

      alert("스크랩 상태 변경 요청 실패");
      console.log("스크랩 상태 변경 요청 실패");

      dispatch({
        type: BOARD_CHANGE_SCRAP_FAIL,
      });
    }
  };
