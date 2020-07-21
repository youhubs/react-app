import React, { Component } from "react"; // imrc

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/50",
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt=""></img>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
