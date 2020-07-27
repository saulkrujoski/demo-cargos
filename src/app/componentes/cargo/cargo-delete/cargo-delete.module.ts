import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { CargoDeleteComponent } from './cargo-delete.component';

@NgModule({
  declarations: [CargoDeleteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioCargoService],
  bootstrap: [CargoDeleteComponent]
})
export class CargoDeleteModule { }