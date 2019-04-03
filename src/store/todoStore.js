import { extendObservable, action } from "mobx";
import remotedev from "mobx-remotedev/lib";

class TodosStore {
  constructor() {
    extendObservable(this, {
      todos: [],
      get getTodos() {
        return this.todos;
      },
      addTodo: action(newTodo => {
        this.todos = this.todos.concat(newTodo);
      }),
      removeTodo: action(index => {
        this.todos = [
          ...this.todos.slice(0, index),
          ...this.todos.slice(index + 1),
        ];
      }),
    });
  }
}

export default remotedev(new TodosStore());
