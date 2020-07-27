import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEntidadEditComponent } from './tipo-entidad-edit.component';

describe('TipoEntidadEditComponent', () => {
  let component: TipoEntidadEditComponent;
  let fixture: ComponentFixture<TipoEntidadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEntidadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEntidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
