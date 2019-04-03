import React from "react";
import { observer, inject } from "mobx-react";

const Todo = props => (
  <li>
    {props.todo} &nbsp;
    <button onClick={() => props.store.todos.removeTodo(props.id)}>
      delete
    </button>
  </li>
);

export default inject("store")(observer(Todo));
