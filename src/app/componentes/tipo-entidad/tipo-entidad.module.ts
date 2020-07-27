import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoEntidadComponent } from './tipo-entidad.component';
import { Globales } from '../../../globales';

@NgModule({
  declarations: [TipoEntidadComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [Globales],
  bootstrap: [TipoEntidadComponent]
})
export class TipoEntidadModule { }