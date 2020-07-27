import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { TipoEntidadEditComponent } from './tipo-entidad-edit.component';

@NgModule({
  declarations: [TipoEntidadEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoEntidadService],
  bootstrap: [TipoEntidadEditComponent]
})
export class TipoCEntidadEditModule { }