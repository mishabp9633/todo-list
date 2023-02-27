import React, { Component } from "react";
import "./Todolist.css";

export default class Todolist extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
      // [event.target.name] instead input have lot of value
    });
  };

  storeItem = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  deleteItem = (key) => {
    // const allItems = this.state.items
    // allItems.splice(index,1)

    this.setState({
      // items:allItems instead of above code check below code
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItem}>
          <h1>Todo list</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <li
                className="fa-solid fa-trash"
                onClick={() => this.deleteItem(index)}
              ></li>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
