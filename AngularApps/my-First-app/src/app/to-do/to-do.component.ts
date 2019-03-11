import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from './to-do';
import { TodoService } from './to-do.service';
export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  formGroup: FormGroup;
  todos: Todo[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;

  constructor(private _todoService: TodoService, private _formBuilder: FormBuilder) {
    
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': ['', Validators.maxLength(10)],
      'author': ['', Validators.required],
      'due': '',
      'done': '',
      'price': ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    });
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this._todoService.getTodosFromData();
  }

  saveTodo(todo: Todo) {
    debugger;
    if (todo.id) {
      this._todoService.editTodo(todo);
    } else {
      this._todoService.addTodo(todo);
    }
    this.saveMode = SaveMode.None;
  }

  removeToDo(todo: Todo) {
    this._todoService.deleteTodo(todo);
  }

  cancelEditTodo() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(todo: Todo) {
    if (!todo) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit To-Do';
    const editedTodo = Object.assign({}, todo);
    this.formGroup.setValue(editedTodo);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'New To-Do';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

}