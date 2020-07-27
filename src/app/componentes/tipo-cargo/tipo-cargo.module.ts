import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoCargoComponent } from './tipo-cargo.component';
import { Globales } from '../../../globales';

@NgModule({
  declarations: [TipoCargoComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [Globales],
  bootstrap: [TipoCargoComponent]
})
export class TipoCargoModule { }