import React, { Component } from "react";
// Untuk membuat komponen menggunakan ES6 class karena kita ingin menggunakan state

class Button extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return <button onClick={handleClick}>
      {this.props.text} {this.state.counter} + 1
    </button>
  }
}