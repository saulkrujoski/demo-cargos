import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TipoEntidadMensajes } from '../../tipo-entidad/mensajes';

@Component({
  selector: 'app-tipo-entidad-show',
  templateUrl: './tipo-entidad-show.component.html',
  styleUrls: ['./tipo-entidad-show.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadShowComponent implements OnInit {
// se inicializan los datos para pruebas offline
unaEntidad: TipoEntidad = {id:1, nombre: 'Un tipo de Entidad'};
private clave: string;
loading: boolean = false;

constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioTipoEntidadService, public globales: Globales, public mensajes: TipoEntidadMensajes) { }

ngOnInit(): void {
  this.globales.reload();
  this.rutaActiva.params.subscribe(
    (params: Params) => {
      this.clave = params.id;
    }
  );
  
  // Aquí se recuperan los datos del objeto
  this.servicio.getOne(this.clave).subscribe(
    result => {
        this.unaEntidad = result;
        this.loading = false;
        if( this.unaEntidad == null ){
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = this.mensajes.msjs_not_exist;
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
