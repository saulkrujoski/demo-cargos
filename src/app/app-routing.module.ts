import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from '../app/componentes/bienvenida/bienvenida.component';
import { PageNotFoundComponent } from '../app/componentes/page-not-found/page-not-found.component';
import { CargoComponent} from '../app/componentes/cargo/cargo.component';
import { CargoNewComponent} from '../app/componentes/cargo/cargo-new/cargo-new.component';
import { CargoShowComponent} from '../app/componentes/cargo/cargo-show/cargo-show.component';
import { CargoEditComponent } from '../app/componentes/cargo/cargo-edit/cargo-edit.component';
import { CargoDeleteComponent} from '../app/componentes/cargo/cargo-delete/cargo-delete.component';
import { TipoCargoComponent } from './componentes/tipo-cargo/tipo-cargo.component';
import { TipoCargoNewComponent } from './componentes/tipo-cargo/tipo-cargo-new/tipo-cargo-new.component';
import { TipoCargoShowComponent } from './componentes/tipo-cargo/tipo-cargo-show/tipo-cargo-show.component';
import { TipoCargoEditComponent } from './componentes/tipo-cargo/tipo-cargo-edit/tipo-cargo-edit.component';
import { TipoCargoDeleteComponent } from './componentes/tipo-cargo/tipo-cargo-delete/tipo-cargo-delete.component';
import { TipoEntidadComponent } from './componentes/tipo-entidad/tipo-entidad.component';
import { TipoEntidadNewComponent } from './componentes/tipo-entidad/tipo-entidad-new/tipo-entidad-new.component';
import { TipoEntidadShowComponent } from './componentes/tipo-entidad/tipo-entidad-show/tipo-entidad-show.component';
import { TipoEntidadEditComponent } from './componentes/tipo-entidad/tipo-entidad-edit/tipo-entidad-edit.component';
import { TipoEntidadDeleteComponent } from './componentes/tipo-entidad/tipo-entidad-delete/tipo-entidad-delete.component';


const routes: Routes = [
  { path: '', component: BienvenidaComponent, pathMatch: 'full' },
  { path: 'cargo', component: CargoComponent, pathMatch: 'full' },
  { path: 'cargo/new', component: CargoNewComponent, pathMatch: 'full' },
  { path: 'cargo/show/:id', component: CargoShowComponent, pathMatch: 'full' },
  { path: 'cargo/edit/:id', component: CargoEditComponent, pathMatch: 'full' },
  { path: 'cargo/delete/:id', component: CargoDeleteComponent, pathMatch: 'full' },
  { path: 'tipocargo', component: TipoCargoComponent, pathMatch: 'full' },
  { path: 'tipocargo/new', component: TipoCargoNewComponent, pathMatch: 'full' },
  { path: 'tipocargo/show/:id', component: TipoCargoShowComponent, pathMatch: 'full' },
  { path: 'tipocargo/edit/:id', component: TipoCargoEditComponent, pathMatch: 'full' },
  { path: 'tipocargo/delete/:id', component: TipoCargoDeleteComponent, pathMatch: 'full' },
  { path: 'tipoentidad', component: TipoEntidadComponent, pathMatch: 'full' },
  { path: 'tipoentidad/new', component: TipoEntidadNewComponent, pathMatch: 'full' },
  { path: 'tipoentidad/show/:id', component: TipoEntidadShowComponent, pathMatch: 'full' },
  { path: 'tipoentidad/edit/:id', component: TipoEntidadEditComponent, pathMatch: 'full' },
  { path: 'tipoentidad/delete/:id', component: TipoEntidadDeleteComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }