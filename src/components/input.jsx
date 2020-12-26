import React, { memo } from "react";

const Input = memo((props) => {
  console.log("input");

  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    formRef.current.reset();
    name && props.onAdd(name);
  };

  return (
    <>
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    </>
  );
});

export default Input;
