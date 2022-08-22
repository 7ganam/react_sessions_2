import React, { Component } from "react";

export default class UnPure extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("unpure ran");
    return (
      <div className="comp" style={{ width: "90%" }}>
        {this.props.name}
      </div>
    );
  }
}
