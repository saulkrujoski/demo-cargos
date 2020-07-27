import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { TipoEntidadShowComponent } from './tipo-entidad-show.component';

@NgModule({
  declarations: [TipoEntidadShowComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoEntidadService],
  bootstrap: [TipoEntidadShowComponent]
})
export class TipoEntidadShowModule { }