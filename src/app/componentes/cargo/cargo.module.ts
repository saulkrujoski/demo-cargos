import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CargoComponent } from './cargo.component';
import { Globales } from '../../../globales';

@NgModule({
  declarations: [CargoComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [Globales],
  bootstrap: [CargoComponent]
})
export class CargoModule { }