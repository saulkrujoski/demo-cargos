import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Globales } from '../../../../globales';
import { TipoEntidadMensajes } from '../mensajes';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';

@Component({
  selector: 'app-tipo-entidad-delete',
  templateUrl: './tipo-entidad-delete.component.html',
  styleUrls: ['./tipo-entidad-delete.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadDeleteComponent implements OnInit {
  private clave: string;
  loading: boolean;

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private servicio: ServicioTipoEntidadService, public globales: Globales, private mensajes: TipoEntidadMensajes) { }

  ngOnInit(): void {}

  delete():void {
    
    this.loading = true;
    this.globales.reload();
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );

    // Comprobaremos si existe
    let unTipo: TipoEntidad = null;
    this.servicio.getOne(this.clave).subscribe(
      result => {
        unTipo = result;
        if( unTipo == null ){
          this.loading = false;
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = this.mensajes.msjs_not_exist;
          return;
        }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
        return;
      }
    );

    // Ahora si lo eliminamos
    this.servicio.delete(this.clave).subscribe(
      result => {
        this.loading = false;
        this.globales.operation_success = true;
        this.globales.success_mensaje = this.mensajes.msjs_delete;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );
  }
}