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

// QA 결과 전송 함수
export const ResultQAAsync = (index) => async (dispatch, getState) => {
  const dateInfo = toDayInfo();

  try {
    // 결과 날짜를 꼭 보내야 할까?
    // const res = await axios.post(`/api/QA?date=${dateInfo.date}&index=${index}`);
    // const { selected_emoji_url, description, month_emoji } = res.data;

    const selected_emoji_url = "../../assets/img/dummy-emoji.svg";
    const description = "선택한 이미지 상세정보?";
    const month_emoji = [
      {
        date: "2022-05-13",
        emoji_url: "../../assets/img/dummy-emoji.svg",
      },
      {
        date: "2022-05-13",
        emoji_url: "../../assets/img/dummy-emoji.svg",
      },
      {
        date: "2022-05-13",
        emoji_url: "../../assets/img/dummy-emoji.svg",
      },
    ];

    dispatch({
      type: QA_RESULT_SUCCESS,
      payload: {
        selected_emoji_url,
        description,
        month_emoji,
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
