import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newTaskEvent: EventEmitter<todo> = new EventEmitter()


  constructor() { }
  task:string=""
  category:string=""
  anotherTask:string=""

  ngOnInit(): void {
  }

  addTodo(form:NgForm){
    console.log(form)
    const {task,category} =form.value
    const newTodo = new todo(task,category)
    this.newTaskEvent.emit(newTodo)
  }

}
