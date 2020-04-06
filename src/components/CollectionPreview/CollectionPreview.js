import React from "react";

import "./CollectionPreview.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...otherProps }) => (
          <CollectionItem id={id} {...otherProps}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
