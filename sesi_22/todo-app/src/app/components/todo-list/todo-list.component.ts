import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  //* membuat array kosong dengan nama todo
  todos:Todo[] = []

  ngOnInit(): void {
    //* melakukan pengisian object Todo ( interface yang telah dibuat sebelumnya ) secara manual 
    this.todos = [
      {
        content:'First Todo',
        completed:false
      },
      {
        content:'Second Todo',
        completed:false
      }
    ]
  }
  toggleDone(id : number){
    this.todos.map((v,i)=>{
      if (i == id) v.completed = !v.completed
      console.log(v)
      return v
    })
  }

  deleteTodo(id:number){
    this.todos =this.todos.filter((v,i)=>i !== id)
  }

  addTodos(todo: Todo){
    this.todos.push(todo)
  }

}
