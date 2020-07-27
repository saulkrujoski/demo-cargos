import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { CargoEditComponent } from './cargo-edit.component';

@NgModule({
  declarations: [CargoEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioCargoService],
  bootstrap: [CargoEditComponent]
})
export class CargoEditModule { }