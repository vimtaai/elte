import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemViewComponent } from './user-item-view.component';

describe('UserItemViewComponent', () => {
  let component: UserItemViewComponent;
  let fixture: ComponentFixture<UserItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
