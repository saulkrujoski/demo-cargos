import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCargoShowComponent } from './tipo-cargo-show.component';

describe('TipoCargoShowComponent', () => {
  let component: TipoCargoShowComponent;
  let fixture: ComponentFixture<TipoCargoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCargoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCargoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
