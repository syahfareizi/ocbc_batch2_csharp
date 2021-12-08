import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
//export class TemplateDrivenFormComponent implements OnInit {
export class TemplateDrivenFormComponent  {
  task: Task [] =[]
  categories = ['School', 'Work', 'Hobby']

  onSubmit(form: NgForm){
    const {taskName, category} = form.value
    this.task = [...this.task, new Task(taskName, false, category)]
    form.reset()
  }
}