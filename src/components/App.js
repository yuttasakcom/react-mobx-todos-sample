import React from "react";
import { observer, Provider } from "mobx-react";

import todoStore from "../store/todoStore";
import TodoList from "./Todos/TodoList";

const App = observer(() => (
  <Provider todoStore={todoStore}>
    <>
      <h2>Index Page</h2>
      <TodoList />
    </>
  </Provider>
));

export default App;
