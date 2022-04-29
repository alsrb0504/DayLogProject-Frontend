import React from "react";

const EmptyText = ({ text }) => {
  return (
    <p className="text">
      {text.split("<br/>").map((text, idx) => (
        <span key={idx}>
          {text}
          <br />
        </span>
      ))}
    </p>
  );
};

export default EmptyText;
