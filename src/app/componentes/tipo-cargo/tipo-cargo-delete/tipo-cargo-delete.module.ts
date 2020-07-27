import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { TipoCargoDeleteComponent } from './tipo-cargo-delete.component';

@NgModule({
  declarations: [TipoCargoDeleteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoCargoService],
  bootstrap: [TipoCargoDeleteComponent]
})
export class TipoCargoDeleteModule { }