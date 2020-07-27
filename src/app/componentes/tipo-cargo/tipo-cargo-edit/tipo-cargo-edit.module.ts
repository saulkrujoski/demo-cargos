import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { TipoCargoEditComponent } from './tipo-cargo-edit.component';

@NgModule({
  declarations: [TipoCargoEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoCargoService],
  bootstrap: [TipoCargoEditComponent]
})
export class TipoCargoEditModule { }