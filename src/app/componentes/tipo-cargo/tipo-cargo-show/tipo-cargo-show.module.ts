import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { TipoCargoShowComponent } from './tipo-cargo-show.component';

@NgModule({
  declarations: [TipoCargoShowComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioCargoService],
  bootstrap: [TipoCargoShowComponent]
})
export class TipoCargoShowModule { }