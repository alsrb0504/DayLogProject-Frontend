import {
  QA_REQUEST_FAIL,
  QA_REQUEST_SUCCESS,
  QA_RESULT_FAIL,
  QA_RESULT_SUCCESS,
} from "../actions/types";

const initState = {
  question: "",
  choices: [],
  month_emoji: [],
  selected_emoji_index: 0,
  description: "",
};

const qaReducer = (state = initState, action) => {
  switch (action.type) {
    case QA_REQUEST_SUCCESS: {
      const { question, choice } = action.payload;
      return {
        ...state,
        question,
        choices: choice,
      };
    }

    case QA_RESULT_SUCCESS: {
      const { selected_emoji_index, description, month_emoji } = action.payload;
      return {
        ...state,
        selected_emoji_index,
        description,
        month_emoji,
      };
    }

    case QA_REQUEST_FAIL:
    case QA_RESULT_FAIL: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default qaReducer;
