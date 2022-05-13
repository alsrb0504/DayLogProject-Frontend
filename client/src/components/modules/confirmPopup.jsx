import React from "react";
import Button from "./button";

const ConfirmPopup = ({ text, close, confirm }) => {
  return (
    <div>
      <span>{text}</span>
      <div>
        <Button
          text="취소"
          color="btn-secondary"
          size="btn-40"
          onClick={close}
        />
        <Button
          text="확인"
          color="btn-primary"
          size="btn-40"
          onClick={confirm}
        />
      </div>
    </div>
  );
};

export default ConfirmPopup;
