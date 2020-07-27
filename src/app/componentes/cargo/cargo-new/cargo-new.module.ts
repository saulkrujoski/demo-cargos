import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargoNewComponent } from './cargo-new.component';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';

@NgModule({
  declarations: [CargoNewComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ServicioCargoService],
  bootstrap: [CargoNewComponent]
})
export class CargoNewModule { }