import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemViewComponent } from './todo-item-view.component';

describe('TodoItemViewComponent', () => {
  let component: TodoItemViewComponent;
  let fixture: ComponentFixture<TodoItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
