import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformComponent } from './addform.component';

describe('AddformComponent', () => {
  let component: AddformComponent;
  let fixture: ComponentFixture<AddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
