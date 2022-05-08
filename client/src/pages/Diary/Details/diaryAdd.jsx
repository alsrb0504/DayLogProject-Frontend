import React from "react";
import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";

const DiaryAdd = (props) => {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate("/diary");
  };

  return (
    <>
      <InputHeader text="일기 홈으로" onClick={moveBack} />
    </>
  );
};

export default DiaryAdd;
