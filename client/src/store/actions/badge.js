import axios from "axios";
import {
  BADGE_CHALLENGE_FAIL,
  BADGE_CHALLENGE_SUCCESS,
  BADGE_REQUEST_CHALLENGE_BADGE_EMPTY,
  BADGE_REQUEST_CHALLENGE_BADGE_FAIL,
  BADGE_REQUEST_CHALLENGE_BADGE_FILL,
  BADGE_REQUEST_FAIL,
  BADGE_REQUEST_SUCCESS,
  BADGE_SELECT,
} from "./types";

function FindChallengeBadge(badgeArr) {
  const findBadge = badgeArr.find((badge) => badge.challenge === true);

  return findBadge;
}

// 뱃지 목록 조회 요청 함수
export const RequestBadgeListAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/badge");
    const { badges } = res.data;

    // 테스트용
    // const badges = [
    //   {
    //     badge_no: 1,
    //     badge_name: "뱃지 이름 1",
    //     badge_url: null,
    //     challenge: false,
    //     goal_count: 1,
    //     final_count: 10,
    //     is_complete: false,
    //     description: "뱃지 이름 1의 뱃지 설명",
    //   },
    //   {
    //     badge_no: 2,
    //     badge_name: "뱃지 이름 2",
    //     badge_url: null,
    //     challenge: false,
    //     goal_count: 2,
    //     final_count: 10,
    //     is_complete: true,
    //     description: "뱃지 이름 2의 뱃지 설명",
    //   },
    //   {
    //     badge_no: 3,
    //     badge_name: "뱃지 이름 3",
    //     badge_url: null,
    //     challenge: false,
    //     goal_count: 3,
    //     final_count: 10,
    //     is_complete: false,
    //     description: "뱃지 이름 3의 뱃지 설명",
    //   },
    // ];

    const challenge_badge = FindChallengeBadge(badges);

    dispatch({
      type: BADGE_REQUEST_SUCCESS,
      payload: {
        badges,
        challenge_badge,
      },
    });
  } catch (e) {
    console.error(e);

    alert("뱃지 목록 조회 실패");
    console.log("뱃지 목록 조회 실패");

    dispatch({
      type: BADGE_REQUEST_FAIL,
    });
  }
};

// 뱃지 상태(도전) 변경 요청 함수
export const ChangeBadgeStateAsync = (badge_no) => async (dispatch) => {
  console.log(badge_no);

  try {
    const res = await axios.get(`/api/badge/challenge?badge_no=${badge_no}`);
    const { badges } = res.data;

    // 테스트용
    // const badges = [
    //   {
    //     badge_no: 1,
    //     badge_name: "뱃지 이름 1",
    //     badge_url: null,
    //     challenge: false,
    //     goal_count: 1,
    //     final_count: 10,
    //     is_complete: false,
    //     description: "뱃지 이름 1의 뱃지 설명",
    //   },
    //   {
    //     badge_no: 2,
    //     badge_name: "뱃지 이름 2",
    //     badge_url: null,
    //     challenge: false,
    //     goal_count: 2,
    //     final_count: 10,
    //     is_complete: true,
    //     description: "뱃지 이름 2의 뱃지 설명",
    //   },
    //   {
    //     badge_no: 3,
    //     badge_name: "뱃지 이름 3",
    //     badge_url: null,
    //     challenge: true,
    //     goal_count: 3,
    //     final_count: 10,
    //     is_complete: false,
    //     description: "뱃지 이름 3의 뱃지 설명",
    //   },
    // ];

    const challenge_badge = FindChallengeBadge(badges);

    dispatch({
      type: BADGE_CHALLENGE_SUCCESS,
      payload: {
        badges,
        challenge_badge,
      },
    });
  } catch (e) {
    console.error(e);

    alert("뱃지 상태 변경 실패");
    console.log("뱃지 상태 변경 실패");

    dispatch({
      type: BADGE_CHALLENGE_FAIL,
    });
  }
};

// 팝업으로 볼 뱃지 선택 함수
export const selectBadge = (badge_no) => (dispatch, getState) => {
  const badgeArr = getState().badge.badges;

  console.log(badgeArr);

  const select_badge = badgeArr.find((badge) => badge.badge_no === badge_no);

  dispatch({
    type: BADGE_SELECT,
    payload: {
      select_badge,
    },
  });
};

// 홈화면에서 도전 중인 뱃지만 불러오는 함수
export const RequestChallengeBadgeAsync = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/badge/check");
    const { is_present } = res.data;

    // 1. 도전 중인 뱃지가 없는 경우
    if (!is_present) {
      dispatch({
        type: BADGE_REQUEST_CHALLENGE_BADGE_EMPTY,
      });
    }

    // 2. 도전 중인 뱃지가 있는 경우
    if (is_present) {
      const { badge } = res.data;

      dispatch({
        type: BADGE_REQUEST_CHALLENGE_BADGE_FILL,
        payload: {
          challenge_badge: badge,
        },
      });
    }
  } catch (e) {
    console.error(e);

    alert("도전중인 뱃지 정보 요청 실패");
    console.log("도전중인 뱃지 정보 요청 실패");

    dispatch({
      type: BADGE_REQUEST_CHALLENGE_BADGE_FAIL,
    });
  }
};
