import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberViewComponent } from './family-member-view.component';

describe('FamilyMemberViewComponent', () => {
  let component: FamilyMemberViewComponent;
  let fixture: ComponentFixture<FamilyMemberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyMemberViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
