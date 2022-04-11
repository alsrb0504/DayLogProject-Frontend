import React from "react";

const InputContainer = ({ children, size }) => {
  return (
    <div className={`input-container-36 ${size ? size : "col-sm-4"}`}>
      {children}
    </div>
  );
};

export default InputContainer;
