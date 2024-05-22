import { Component, Input,  EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/ToDo.model';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-list-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list-form.component.html',
  styleUrl: './todo-list-form.component.css'
})
export class TodoListFormComponent implements OnInit{

  @Input() todo: Todo = {
    task: '',
    completed: false,
    duration: 0,
    priority: 'LOW'
  };

  @Output() save = new EventEmitter<Todo>();
  newtodo: Todo = this.todo;

  task: string = '';
  duration: number = 0;
  priority: 'NORMAL' | 'HIGH' | 'LOW' = 'LOW';

  constructor() {}

  ngOnInit(): void {
    if(!this.todo) {
      this.resetForm();
    } else {
      this.newtodo = { ...this.todo}
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.todo.task = this.task;
      this.todo.duration = this.duration;
      this.todo.priority = this.priority;
      this.save.emit(this.todo);
      form.reset();
      this.resetForm();
    }
  }

  resetForm() {
    this.todo = {
      task: '',
      duration: 0,
      priority: 'LOW',
      completed: false
    };
  }
}
