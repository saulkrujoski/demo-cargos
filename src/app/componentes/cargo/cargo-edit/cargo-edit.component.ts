import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../../modelo/cargo';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cargo-edit',
  templateUrl: './cargo-edit.component.html',
  styleUrls: ['./cargo-edit.component.css'],
  providers: [ServicioCargoService, ServicioTipoCargoService, ServicioTipoEntidadService]
})
export class CargoEditComponent implements OnInit {
  // Datos inicializados para pruebas offline
  unCargo: Cargo = {id:1, cantidad: 5, tipoCargo: {id: 1, nombre: 'Un tipo cargo'}, tipoEntidad: {id:1, nombre: 'Un tipo entidad'}};
  public miFormulario: FormGroup;
  private clave: string;
  
  // inicializado únicamente para las pruebas offline
  tiposCargos: TipoCargo[] = [
    {id: 1, nombre: 'Tipo de Cargo 1', estado: true},
    {id: 2, nombre: 'Tipo de Cargo 2', estado: true},
    {id: 3, nombre: 'Tipo de Cargo 3', estado: true}
  ];

  tiposEntidades: TipoEntidad[] = [
    {id: 1, nombre: 'Tipo de Entidad 1', estado: true},
    {id: 2, nombre: 'Tipo de Entidad 2', estado: true},
    {id: 3, nombre: 'Tipo de Entidad 3', estado: true}
  ];

  constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioCargoService,private servicioTiposCargos: ServicioTipoCargoService,private servicioTipoEntidad: ServicioTipoEntidadService, public globales: Globales) {}

  ngOnInit(): void {
    console.log(this.unCargo);
    this.buildForm();
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

    // Aquí se recuperan los datos del objeto
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );
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

  // Controles para los formularios
  private buildForm():void{
    this.miFormulario = new FormGroup({
      cantidad: new FormControl('',[Validators.required, Validators.min(1)]),
      tipoCargo: new FormControl('',[Validators.required]),
      tipoEntidad: new FormControl('',[Validators.required])
    });
  }

  get cantidad(){ return this.miFormulario.get('cantidad');}
  get tipoCargo(){ return this.miFormulario.get('tipoCargo');}
  get tipoEntidad(){ return this.miFormulario.get('tipoEntidad');}
  
  limpiar():void{
    this.miFormulario.reset();
  }

  guardar():void{
    console.log('Antes de guardar el formualrio: ', this.miFormulario.value);
    this.globales.reload();
    // validación del formulario
    if( this.miFormulario.valid ){
      this.servicio.update(this.miFormulario.value).subscribe(
        result => {
          this.globales.operation_success = true;
          this.globales.success_mensaje = 'Cargo nuevo modificado exitosamente.';
        },
        error => {
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos.';
        }
      );
    }else{
      this.globales.operation_danger = true;
      this.globales.danger_mensaje = 'Algo ocurrio con la validación del formulario, revisa los mensajes para cada campo.';
    }
  }
}
