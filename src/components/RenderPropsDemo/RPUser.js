import React, { Component } from "react";

export default class RPUser extends Component {
  render() {
    return <div className="comp">{this.props.calculate(6)}</div>;
  }
}
