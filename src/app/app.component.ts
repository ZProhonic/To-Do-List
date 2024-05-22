import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './interfaces/ToDo.model';
import { CommonModule } from '@angular/common';
import { TodoListFormComponent } from './components/todo-list-form/todo-list-form.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoListFormComponent, TodoListItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    { task: 'Mow Lawn', completed: true, duration: 30},
    { task: 'Clean Laundry', completed: false, duration: 60, priority: 'LOW'},
    { task: 'Take Garbage Out', completed: true, duration: 10}
  ];

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  removeTodo(todoToRemove: Todo) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
  }
}
