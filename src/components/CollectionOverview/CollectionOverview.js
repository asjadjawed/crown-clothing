import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionOverview.scss";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collections-overview">
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollection,
});

export default connect(mapStateToProps)(CollectionOverview);
