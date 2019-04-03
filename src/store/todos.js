import { observable } from "mobx";

class TodoStore {
  @observable todos = [];
}

export default new TodoStore();
