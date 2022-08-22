import React from "react";

const WithCalculateHOC = (ToBeExtendedComponentClass) => {
  return class extends React.Component {
    calculate = (x) => x * 4;
    render() {
      return (
        <ToBeExtendedComponentClass
          calculate={this.calculate}
          {...this.props}
        ></ToBeExtendedComponentClass>
      );
    }
  };
};

export default WithCalculateHOC;
