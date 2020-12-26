import React, { memo } from "react";
import Habit from "./habit";

const Habits = memo((props) => {
  console.log("habits");
  return (
    <>
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </>
  );
});

export default Habits;
