import React, { memo, useCallback } from "react";

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  console.log("habit");
  const handleIncrement = useCallback(() => {
    onIncrement(habit);
  }, []);

  const handleDecrement = useCallback(() => {
    onDecrement(habit);
  }, []);

  const handleDelete = useCallback(() => {
    onDelete(habit);
  }, []);

  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
