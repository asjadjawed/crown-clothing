import React, { Component } from "react";

import SectionsData from "./sections.data";
import "./Directory.scss";

import MenuItem from "../MenuItem/MenuItem";

export default class Directory extends Component {
  state = {
    sections: SectionsData
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
