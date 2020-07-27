import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { TipoEntidadDeleteComponent } from './tipo-entidad-delete.component';

@NgModule({
  declarations: [TipoEntidadDeleteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoEntidadService],
  bootstrap: [TipoEntidadDeleteComponent]
})
export class TipoEntidadDeleteModule { }