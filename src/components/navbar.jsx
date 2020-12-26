import React, { memo } from "react";

const Navbar = memo((props) => {
  console.log("navbar");

  return (
    <>
      <nav className="navbar">
        <i className="fas fa-leaf"></i>
        <span className="text">Habit Tracker</span>
        <span className="habit-number">{props.habitCount}</span>
      </nav>
    </>
  );
});

export default Navbar;
