import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyViewComponent } from './family-view.component';

describe('FamilyViewComponent', () => {
  let component: FamilyViewComponent;
  let fixture: ComponentFixture<FamilyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
