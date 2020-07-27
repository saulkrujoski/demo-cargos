import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoShowComponent } from './cargo-show.component';

describe('CargoShowComponent', () => {
  let component: CargoShowComponent;
  let fixture: ComponentFixture<CargoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
