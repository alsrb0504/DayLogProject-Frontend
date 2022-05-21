import {
  BADGE_CHALLENGE_FAIL,
  BADGE_CHALLENGE_SUCCESS,
  BADGE_REQUEST_FAIL,
  BADGE_REQUEST_SUCCESS,
  BADGE_SELECT,
} from "../actions/types";

const initState = {
  badges: [],
  challenge_badge: {},
  popup_badge: {},
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
    case BADGE_CHALLENGE_SUCCESS: {
      return {
        ...state,
        badges: action.payload.badges,
        challenge_badge: action.payload.challenge_badge,
        popup_badge: action.payload.challenge_badge,
      };
    }
    case BADGE_SELECT: {
      return {
        ...state,
        popup_badge: action.payload.select_badge,
      };
    }

    case BADGE_REQUEST_FAIL:
    case BADGE_CHALLENGE_FAIL: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default badgeReducer;
