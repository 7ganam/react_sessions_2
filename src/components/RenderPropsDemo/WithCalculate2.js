import React, { Component } from "react";

export default class WithCalculate2 extends Component {
  calculate = (x) => x * 4;

  render() {
    return <>{this.props.render(this.calculate)}</>;
  }
}
