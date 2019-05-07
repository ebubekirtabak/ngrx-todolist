import { TodoModel } from 'src/app/models/todo.model';

export interface TodoState {
  todoList: TodoModel[];
}

export const initialUserState: TodoState = {
  todoList: null
};
