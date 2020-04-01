import React, { Component } from "react";

import ShopData from "./shop.data";

export default class Shop extends Component {
  state = {
    collection: ShopData
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.collection, null, 2)}</pre>
      </div>
    );
  }
}
