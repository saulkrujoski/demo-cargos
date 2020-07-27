import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../../modelo/cargo';
import { Globales } from '../../../../globales';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cargo-show',
  templateUrl: './cargo-show.component.html',
  styleUrls: ['./cargo-show.component.css'],
  providers: [ServicioCargoService, ServicioTipoCargoService, ServicioTipoEntidadService]
})
export class CargoShowComponent implements OnInit {
  // se inicializan los datos para pruebas offline
  unCargo: Cargo = {id:1, cantidad: 5, tipoCargo: {id:1, nombre: 'Un tipo cargo'}, tipoEntidad: {id:1, nombre: 'Un tipo entidad'}, estado: false};
  private clave: string;
  
  // Para las pruebas offline
  tiposCargos: Observable<TipoCargo[]>;
  // Para las pruebas offline
  tiposEntidades: Observable<TipoEntidad[]>;

  constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioCargoService,private servicioTiposCargos: ServicioTipoCargoService,private servicioTipoEntidad: ServicioTipoEntidadService, public globales: Globales) { }

  ngOnInit(): void {
    this.globales.reload();
    // aquí cargar los tipos de cargos
    this.servicioTiposCargos.getAll().subscribe(
      result => {
          this.tiposCargos = result;
      },
      error => {
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos para recuperar la lista de Tipos de Cargo. El estado devuelto es (' + error['status'] + ').';
      }
    );

    // aquí cargar los tipos de entidad
    this.servicioTipoEntidad.getAll().subscribe(
      result => {
          this.tiposEntidades = result;
      },
      error => {
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos para recuperar la lista de Tipos de Cargo. El estado devuelto es (' + error['status'] + ').';
      }
    );

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );
    
    // Aquí se recuperan los datos del objeto
    this.servicio.getOne(this.clave).subscribe(
      result => {
          this.unCargo = result;
      },
      error => {
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos.';
      }
    );
  }

}