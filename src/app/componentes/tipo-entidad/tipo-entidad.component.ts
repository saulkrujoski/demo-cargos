import { Component, OnInit } from '@angular/core';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { ServicioTipoEntidadService } from '../../servicios/servicio-tipo-entidad.service';
import { Globales } from '../../../globales';
import { TipoEntidadMensajes } from '../tipo-entidad/mensajes';

@Component({
  selector: 'app-tipo-entidad',
  templateUrl: './tipo-entidad.component.html',
  styleUrls: ['./tipo-entidad.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadComponent implements OnInit {
  loading: boolean = false;
  tipos: Observable<TipoEntidad[]>;

  constructor(private servicio: ServicioTipoEntidadService, public globales: Globales, private mensajes: TipoEntidadMensajes) { }

  ngOnInit(): void {
    this.globales.reload();
    this.loading = true;
    this.servicio.getAll().subscribe(
      result => {
        this.loading = false;
        this.tipos = result;
        if( this.tipos == null ){
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = this.mensajes.msjs_list_not_ok;
          return;
        }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );
  }
}