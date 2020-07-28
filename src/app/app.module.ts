import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globales } from '../globales';
import { HttpClientModule } from '@angular/common/http';

// Aspectos de UI generales
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ErroresComponent } from './componentes/errores/errores.component';
import { BackHomeComponent } from './componentes/navegacion/back-home/back-home.component';

// Relacionados al concepto de cargo
import { CargoMensajes } from '../app/componentes/cargo/mensajes';
import { CargoComponent } from './componentes/cargo/cargo.component';
import { CargoNewComponent } from './componentes/cargo/cargo-new/cargo-new.component';
import { CargoShowComponent } from './componentes/cargo/cargo-show/cargo-show.component';
import { CargoEditComponent } from './componentes/cargo/cargo-edit/cargo-edit.component';
import { CargoDeleteComponent } from './componentes/cargo/cargo-delete/cargo-delete.component';

// Relacionados al concepto de Tipo de Entidad
import { TipoCargoMensajes } from '../app/componentes/tipo-cargo/mensajes';
import { TipoEntidadComponent } from './componentes/tipo-entidad/tipo-entidad.component';
import { TipoEntidadNewComponent } from './componentes/tipo-entidad/tipo-entidad-new/tipo-entidad-new.component';
import { TipoEntidadShowComponent } from './componentes/tipo-entidad/tipo-entidad-show/tipo-entidad-show.component';
import { TipoEntidadEditComponent } from './componentes/tipo-entidad/tipo-entidad-edit/tipo-entidad-edit.component';
import { TipoEntidadDeleteComponent } from './componentes/tipo-entidad/tipo-entidad-delete/tipo-entidad-delete.component';

// Relacionados al concepto de Tipo de Cargo
import { TipoEntidadMensajes } from '../app/componentes/tipo-entidad/mensajes';
import { TipoCargoComponent } from './componentes/tipo-cargo/tipo-cargo.component';
import { TipoCargoNewComponent } from './componentes/tipo-cargo/tipo-cargo-new/tipo-cargo-new.component';
import { TipoCargoShowComponent } from './componentes/tipo-cargo/tipo-cargo-show/tipo-cargo-show.component';
import { TipoCargoEditComponent } from './componentes/tipo-cargo/tipo-cargo-edit/tipo-cargo-edit.component';
import { TipoCargoDeleteComponent } from './componentes/tipo-cargo/tipo-cargo-delete/tipo-cargo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    BienvenidaComponent,
    PageNotFoundComponent,
    ErroresComponent,
    BackHomeComponent,
    CargoComponent,
    CargoNewComponent,
    CargoShowComponent,
    CargoEditComponent,
    CargoDeleteComponent,
    
    TipoEntidadComponent,
    TipoEntidadNewComponent,
    TipoEntidadShowComponent,
    TipoEntidadEditComponent,
    TipoEntidadDeleteComponent,
    
    TipoCargoComponent,
    TipoCargoNewComponent,
    TipoCargoShowComponent,
    TipoCargoEditComponent,
    TipoCargoDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Globales, CargoMensajes, TipoCargoMensajes, TipoEntidadMensajes],
  bootstrap: [AppComponent]
})
export class AppModule { }