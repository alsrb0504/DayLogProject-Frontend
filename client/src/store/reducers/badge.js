import { BADGE_REQUEST_FAIL, BADGE_REQUEST_SUCCESS } from "../actions/types";

const initState = {
  // badges: [];
  // challenge_badge: {}

  // 로컬 테스트용
  badges: [
    // {
    //   badge_no: 1,
    //   badge_name: "뱃지 이름 1",
    //   badge_url: null,
    //   challenge: false,
    //   goal_count: 1,
    //   final_count: 10,
    //   is_complete: false,
    //   description: "뱃지 이름 1의 뱃지 설명",
    // },
    // {
    //   badge_no: 2,
    //   badge_name: "뱃지 이름 2",
    //   badge_url: null,
    //   challenge: false,
    //   goal_count: 2,
    //   final_count: 10,
    //   is_complete: true,
    //   description: "뱃지 이름 2의 뱃지 설명",
    // },
    // {
    //   badge_no: 3,
    //   badge_name: "뱃지 이름 3",
    //   badge_url: null,
    //   challenge: false,
    //   goal_count: 3,
    //   final_count: 10,
    //   is_complete: false,
    //   description: "뱃지 이름 3의 뱃지 설명",
    // },
  ],
  challenge_badge: {},
};

const badgeReducer = (state = initState, action) => {
  switch (action.type) {
    case BADGE_REQUEST_SUCCESS: {
      return {
        ...state,
        badges: action.payload.badges,
        challenge_badge: action.payload.challenge_badge,
      };
    }

    case BADGE_REQUEST_FAIL: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default badgeReducer;
