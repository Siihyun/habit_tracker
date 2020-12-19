import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    return (
      <>
        <nav className="navbar">
          <i className="fas fa-leaf"></i>
          <span className="text">Habit Tracker</span>
          <span className="habit-number">{this.props.habitCount}</span>
        </nav>
      </>
    );
  }
}

export default Navbar;
