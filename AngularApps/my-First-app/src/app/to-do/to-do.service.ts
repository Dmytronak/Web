import { Injectable } from '@angular/core';

import { Todo } from './to-do';
import { TODO_ITEMS } from '../../api/to-do-data';


@Injectable()
export class TodoService {
  pItems: Todo[] = TODO_ITEMS;
  
  constructor() { }

  getTodosFromData(): Todo[] {

    return this.pItems;
  }
  addTodo(todo: Todo) {

    const addWithIdTodo= Object.assign({}, todo, { id: this.generationOfId() });
    this.pItems.push(addWithIdTodo);
  }
  editTodo(todo: Todo) {
    const index = this.pItems.findIndex(x=> x.id==todo.id);
    this.pItems[index] = todo;

  }
  deleteTodo(todo: Todo) {
    this.pItems.splice(this.pItems.indexOf(todo), 1);
  }
  generationOfId() {
   

    return  Math.floor(Math.random() * 1000);
  }
}