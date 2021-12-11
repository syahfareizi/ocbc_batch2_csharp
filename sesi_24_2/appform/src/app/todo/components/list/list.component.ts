import { Component, Input, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todoList:todo[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
