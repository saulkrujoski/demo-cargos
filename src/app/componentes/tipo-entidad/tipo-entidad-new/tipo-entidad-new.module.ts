import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipoEntidadNewComponent } from './tipo-entidad-new.component';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';

@NgModule({
  declarations: [TipoEntidadNewComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoEntidadService],
  bootstrap: [TipoEntidadNewComponent]
})
export class TipoEntidadNewModule { }