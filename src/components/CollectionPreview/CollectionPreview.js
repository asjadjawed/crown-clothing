import React from "react";

import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items.slice(0, 4).map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
