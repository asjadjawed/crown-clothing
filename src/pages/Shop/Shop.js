import React, { Component } from "react";

import ShopData from "./shop.data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

export default class Shop extends Component {
  state = {
    collection: ShopData,
  };

  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps}></CollectionPreview>
        ))}
      </div>
    );
  }
}
