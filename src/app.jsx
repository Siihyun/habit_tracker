import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Reset from "./components/reset";
import Input from "./components/input";

import React, { useCallback, useState } from "react";

const App = () => {
  const [habits, setHabit] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    // state object 안에 있는 count를 증가 한뒤 state를 update 한다.
    setHabit((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) return { ...habit, count: habit.count + 1 };
        else return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    // state object 안에 있는 count를 감소 한뒤 state를 update 한다.
    setHabit((habits) =>
      habits.map((item) => {
        if (habit.id === item.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        } else return item;
      })
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    // state object 안에 있는 habit을 삭제한뒤 state를 update 한다.
    setHabit((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback((name) => {
    setHabit((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabit((habits) =>
      habits.map((habit) => {
        if (habit.count === 0) return habit;
        else return { ...habit, count: 0 };
      })
    );
  }, []);

  return (
    <>
      <Navbar habitCount={habits.filter((habit) => habit.count > 0).length} />
      <Input onAdd={handleAdd} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
      <Reset onReset={handleReset} />
    </>
  );
};

export default App;
