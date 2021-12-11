import { Component } from '@angular/core';
import { todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appform';

  todos:todo[]=[]

  addNewTodo(newTodo:todo){
    console.log(newTodo)
    this.todos.push(newTodo)
  }
}
