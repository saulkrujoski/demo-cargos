import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCargoComponent } from './tipo-cargo.component';

describe('TipoCargoComponent', () => {
  let component: TipoCargoComponent;
  let fixture: ComponentFixture<TipoCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
