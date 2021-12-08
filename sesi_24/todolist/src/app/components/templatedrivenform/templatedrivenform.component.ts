import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {
  tasks:Task[]=[]
  categories = ['School','Work','Hobby']
  constructor() { }

  onSubmit(form: NgForm){
    const {taskName,category}= form.value
    this.tasks =[...this.tasks, new Task(taskName,false, category)]
    form.reset
  }  
}
