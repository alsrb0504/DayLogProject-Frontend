import { QA_REQUEST_FAIL, QA_REQUEST_SUCCESS } from "../actions/types";

const initState = {
  question: "",
  choice: [],
  month_emoji: [],

  // month_emoji: [
  //   {
  //     date: "2022-05-21",
  //     emoji_url: null,
  //   },
  // ],
};

const qaReducer = (state = initState, action) => {
  switch (action.type) {
    case QA_REQUEST_SUCCESS: {
      const { question, choice } = action.payload;
      return {
        ...state,
        question,
        choice,
      };
    }

    case QA_REQUEST_FAIL: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default qaReducer;
