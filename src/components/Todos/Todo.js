import React from "react";
import { observer, inject } from "mobx-react";

const Todo = props => (
  <li>
    {props.todo} &nbsp;
    <button onClick={() => props.todoStore.removeTodo(props.id)}>delete</button>
  </li>
);

export default inject("todoStore")(observer(Todo));
