import React from "react";

const InputContainer = ({ children, size, label }) => {
  return (
    <>
      {label && <label className="input-label">{label}</label>}
      <div className={`input-container-36 ${size ? size : "col-sm-4"}`}>
        {children}
      </div>
    </>
  );
};

export default InputContainer;
