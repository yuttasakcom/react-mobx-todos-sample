import React from "react";
import { observer, Provider } from "mobx-react";

import store from "../store";
import TodoList from "./Todos/TodoList";

const App = observer(() => (
  <Provider store={store}>
    <>
      <h2>Index Page</h2>
      <TodoList />
    </>
  </Provider>
));

export default App;
