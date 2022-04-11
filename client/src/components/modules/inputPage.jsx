import React from "react";
import Button from "../button";
import InputContainer from "../inputContainer";

const InputPage = (children, size, label, btn_text) => {
  return (
    <>
      <InputContainer children={children} size={size} label={label} />;
      {/* <Button text={btn_text}  /> */}
    </>
  );
};

export default InputPage;
