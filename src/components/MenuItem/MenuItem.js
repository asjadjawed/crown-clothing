import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="content">
      <h2 className="title">{title}</h2>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
