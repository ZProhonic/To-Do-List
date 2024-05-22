import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../interfaces/ToDo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() todo: Todo = {
    task: '',
      completed: false,
      duration: 0,
      priority: 'LOW'
  };

  completeTask() {
    this.todo.completed = true;
  }

  @Output() removetodo = new EventEmitter<Todo>();

  constructor() {}

  onRemoveTodo() {
    this.removetodo.emit(this.todo);
  }
}


