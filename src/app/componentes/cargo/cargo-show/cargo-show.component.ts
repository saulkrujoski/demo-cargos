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
import { CargoMensajes } from '../mensajes';
import { TipoCargoMensajes } from '../../tipo-cargo/mensajes';
import { TipoEntidadMensajes } from '../../tipo-entidad/mensajes';

@Component({
  selector: 'app-cargo-show',
  templateUrl: './cargo-show.component.html',
  styleUrls: ['./cargo-show.component.css'],
  providers: [ServicioCargoService, ServicioTipoCargoService, ServicioTipoEntidadService]
})
export class CargoShowComponent implements OnInit {
  // se inicializan los datos para pruebas offline
  unCargo: Cargo = {id: 0, tipoCargo: {id: 0, nombre: '', estado: false}, tipoEntidad: {id:0 , nombre: '', estado: false}, estado: false};
  private clave: string;
  loading: boolean;
  tiposCargos: Observable<TipoCargo[]>;
  tiposEntidades: Observable<TipoEntidad[]>;

  constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioCargoService,private servicioTiposCargos: ServicioTipoCargoService,private servicioTipoEntidad: ServicioTipoEntidadService, public globales: Globales, public mensajes: CargoMensajes, public mensajesTipoCargo: TipoCargoMensajes, public mensajesTipoEntidad: TipoEntidadMensajes) { }

  ngOnInit(): void {
    this.globales.reload();
    this.loading = true;
    // aquí cargar los tipos de cargos
    this.servicioTiposCargos.getAll().subscribe(
      result => {
          this.tiposCargos = result;
          this.loading = false;
          if( this.tiposCargos == null ){
            this.globales.operation_danger = true;
            this.globales.danger_mensaje = this.mensajesTipoCargo.msjs_list_not_ok;
            return;
          }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );

    // aquí cargar los tipos de entidad
    this.servicioTipoEntidad.getAll().subscribe(
      result => {
          this.tiposEntidades = result;
          this.loading = false;
          if( this.tiposEntidades == null ){
            this.globales.operation_danger = true;
            this.globales.danger_mensaje = this.mensajesTipoEntidad.msjs_list_not_ok;
            return;
          }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );
    
    // Recuperamos al objeto
    this.servicio.getOne(this.clave).subscribe(
      result => {
        this.unCargo = result;
        this.loading = false;
        if( this.unCargo == null ){
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = this.mensajes.msjs_not_exist;
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