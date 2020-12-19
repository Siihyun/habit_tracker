import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Reset from "./components/reset";
import Input from "./components/input";

import React, { Component } from "react";

class App extends Component {
  handleIncrement = (habit) => {
    // state object 안에 있는 count를 증가 한뒤 state를 update 한다.
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) return { ...habit, count: habit.count + 1 };
      else return item;
    });

    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // state object 안에 있는 count를 감소 한뒤 state를 update 한다.
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else return item;
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // state object 안에 있는 habit을 삭제한뒤 state를 update 한다.
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count === 0) return habit;
      else return { ...habit, count: 0 };
    });

    this.setState({ habits });
  };

  state = {
    id: 4,
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
  };

  render() {
    return (
      <>
        <Navbar
          habitCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Input onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
