import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListViewComponent } from './todo-list-view.component';

describe('TodoListViewComponent', () => {
  let component: TodoListViewComponent;
  let fixture: ComponentFixture<TodoListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
