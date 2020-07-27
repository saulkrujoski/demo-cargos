import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { CargoShowComponent } from './cargo-show.component';

@NgModule({
  declarations: [CargoShowComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioCargoService],
  bootstrap: [CargoShowComponent]
})
export class CargoShowModule { }