import React, { PureComponent } from "react";

class Input extends PureComponent {
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    //this.inputRef.current.value = "";
    this.formRef.current.reset();
    name && this.props.onAdd(name);
  };

  formRef = React.createRef();
  inputRef = React.createRef();

  render() {
    return (
      <>
        <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            className="add-input"
            placeholder="Habit"
          />
          <button className="add-button">Add</button>
        </form>
      </>
    );
  }
}

export default Input;
