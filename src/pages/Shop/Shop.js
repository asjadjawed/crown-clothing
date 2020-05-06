import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import { selectCollection } from "../../redux/shop/shop.selector";

const Shop = ({ collection }) => {
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollection,
});

export default connect(mapStateToProps)(Shop);
