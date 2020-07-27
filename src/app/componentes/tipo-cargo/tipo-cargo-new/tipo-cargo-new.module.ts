import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipoCargoNewComponent } from './tipo-cargo-new.component';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';

@NgModule({
  declarations: [TipoCargoNewComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioTipoCargoService],
  bootstrap: [TipoCargoNewComponent]
})
export class TipoCargoNewModule { }