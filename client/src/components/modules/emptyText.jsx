import React from "react";

const EmptyText = ({ text }) => {
  return (
    <p className="text">
      {text.split("<br/>").map((text) => (
        <>
          {text}
          <br />
        </>
      ))}
    </p>
  );
};

export default EmptyText;
