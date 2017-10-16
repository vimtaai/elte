import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: string;

  @Input()
  public clickButton: Function;

  constructor() { }

  ngOnInit() {
  }

}
