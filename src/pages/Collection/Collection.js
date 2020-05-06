import React from "react";
import { connect } from "react-redux";

import "./Collection.scss";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { selectSpecificCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ displayCollection }) => {
  const { title, items } = displayCollection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  displayCollection: selectSpecificCollection(
    ownProps.match.params.collectionId
  )(state),
});

export default connect(mapStateToProps)(CollectionPage);
