import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCargoEditComponent } from './tipo-cargo-edit.component';

describe('TipoCargoEditComponent', () => {
  let component: TipoCargoEditComponent;
  let fixture: ComponentFixture<TipoCargoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCargoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCargoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
