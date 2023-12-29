

import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Dec = () => {
  
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  Reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="main">
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>

        <div className="buttons_div">
          <button onClick={this.Inc} className="but1">+</button>
          <button onClick={this.Dec} className="but2">-</button>
          <button onClick={this.Reset} className="but3">Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;




