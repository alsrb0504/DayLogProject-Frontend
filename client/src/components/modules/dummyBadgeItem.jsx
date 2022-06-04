import React from "react";

const DummyBadgeItem = (props) => {
  return (
    <li className={`badge-item dummy-badge-item badge-item-not-complete`}>
      <div className={`badge-item-image badge-image-dummy`}></div>
      <q className="badge-item-title">Coming Soon</q>
    </li>
  );
};

export default DummyBadgeItem;
