import React from "react";
import { observer, inject } from "mobx-react";
import Todo from "./Todo";

class TodosList extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.refs.todo.value === "") return;
    this.props.todoStore.addTodo(this.refs.todo.value);
    this.refs.todo.value = "";
  };

  render() {
    return (
      <div>
        <h3>TodoList</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Text: </label>
          <input type="text" ref="todo" onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>

        <ul>
          {this.props.todoStore.getTodos.map((todo, i) => (
            <Todo key={i} id={i} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}
export default inject("todoStore")(observer(TodosList));
