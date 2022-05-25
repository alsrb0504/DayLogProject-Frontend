import axios from "axios";
import { toDayInfo } from "../../services/calcDate";
import {
  QA_REQUEST_FAIL,
  QA_REQUEST_SUCCESS,
  QA_RESULT_FAIL,
  QA_RESULT_SUCCESS,
} from "./types";

// QA 질문지와 선택지 요청 함수
export const RequestQAAsync = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/QA");
    const { question, choice } = res.data;

    // const question = "오늘의 질문 오늘의 질문 오늘의 질문 오늘의 질문";
    // const choice = [
    //   {
    //     index: 1,
    //     text: "선택지 1",
    //   },
    //   {
    //     index: 2,
    //     text: "선택지 2",
    //   },
    //   {
    //     index: 3,
    //     text: "선택지 3",
    //   },
    // ];

    dispatch({
      type: QA_REQUEST_SUCCESS,
      payload: {
        question,
        choice,
      },
    });
  } catch (e) {
    console.error(e);

    alert("QA 질문 요청 실패");
    console.log("QA 질문 요청 실패");

    dispatch({
      type: QA_REQUEST_FAIL,
    });
  }
};

// QA 결과 전송 함수
export const ResultQAAsync = (choice) => async (dispatch, getState) => {
  const { index, text } = choice;

  const dateInfo = toDayInfo();

  try {
    // const res = await axios.post(
    //   `/api/QA?date=${dateInfo.date}&index=${index}`
    // );
    // const { month_emoji } = res.data;

    const month_emoji = [
      {
        date: "2022-05-13",
        index: 1,
      },
      {
        date: "2022-05-16",
        index: 3,
      },
      {
        date: "2022-05-23",
        index: 6,
      },
    ];

    dispatch({
      type: QA_RESULT_SUCCESS,
      payload: {
        month_emoji,
        description: text,
        selected_emoji_index: index,
      },
    });
  } catch (e) {
    console.error(e);

    alert("QA 결과 전송 실패");
    console.log("QA 결과 전송 실패");

    dispatch({
      type: QA_RESULT_FAIL,
    });
  }
};
