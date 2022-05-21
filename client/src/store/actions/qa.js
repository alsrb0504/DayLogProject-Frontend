import axios from "axios";
import { QA_REQUEST_FAIL, QA_REQUEST_SUCCESS } from "./types";

// QA 질문지와 선택지 요청 함수
export const RequestQAAsync = () => async (dispatch, getState) => {
  try {
    // const res = await axios.get("/api/QA");
    // const { question, choice } = res.data;

    const question = "오늘의 질문";
    const choice = [
      {
        index: 1,
        text: "선택지 1",
      },
      {
        index: 2,
        text: "선택지 2",
      },
      {
        index: 3,
        text: "선택지 3",
      },
    ];

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
