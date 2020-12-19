import React, { Component } from "react";

class reset extends Component {
  onReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <button className="reset-button" onClick={this.onReset}>
        Reset All
      </button>
    );
  }
}

export default reset;
