import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  //   componentDidMount() {
  //     console.dir("this.inputRef.current :>> ", this.inputRef.current);
  //     this.inputRef.current.innerText = "hello world";
  //   }

  componentDidMount() {
    console.dir("this.inputRef.current :>> ", this.inputRef.current);
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div className="comp">
        {/* <div ref={this.inputRef}></div> */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
