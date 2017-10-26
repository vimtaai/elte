import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopitemComponent } from './shopitem.component';

describe('ShopitemComponent', () => {
  let component: ShopitemComponent;
  let fixture: ComponentFixture<ShopitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
