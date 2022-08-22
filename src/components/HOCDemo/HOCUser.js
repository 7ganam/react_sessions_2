import React, { Component } from "react";
import WithCalculateHOC from "./WithCalculateHOC";

class HOCUser extends Component {
  render() {
    return <div className="comp">{this.props.calculate(5)}</div>;
  }
}

export default WithCalculateHOC(HOCUser);
