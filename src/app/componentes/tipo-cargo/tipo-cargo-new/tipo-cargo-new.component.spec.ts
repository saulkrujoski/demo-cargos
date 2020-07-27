import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCargoNewComponent } from './tipo-cargo-new.component';

describe('TipoCargoNewComponent', () => {
  let component: TipoCargoNewComponent;
  let fixture: ComponentFixture<TipoCargoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCargoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCargoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
