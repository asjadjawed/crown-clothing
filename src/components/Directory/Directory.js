import React, { Component } from "react";

import "./Directory.scss";

import MenuItem from "../MenuItem/MenuItem";

export default class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats"
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets"
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers"
      },
      {
        title: "women's",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        id: 4,
        size: "large",
        linkUrl: "shop/womens"
      },
      {
        title: "men's",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        id: 5,
        size: "large",
        linkUrl: "shop/mens"
      }
    ]
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, imageUrl, title, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
