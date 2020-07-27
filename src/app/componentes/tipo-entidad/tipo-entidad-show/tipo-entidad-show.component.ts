import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

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

constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioTipoEntidadService, public globales: Globales) { }

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
    },
    error => {
      this.globales.operation_danger = true;
      this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos.';
    }
  );
}
}
