import React, { PureComponent } from "react";

export class Pure extends PureComponent {
  render() {
    console.log("pure ran");
    return (
      <div className="comp" style={{ width: "90%" }}>
        {this.props.name}
      </div>
    );
  }
}

export default Pure;
