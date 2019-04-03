import { observable } from "mobx";

class TodosStore {
  @observable todos = [];
}

export default new TodosStore();
