import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../../modelo/cargo';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { CargoMensajes } from '../mensajes';
import { TipoCargoMensajes } from '../../tipo-cargo/mensajes';
import { TipoEntidadMensajes } from '../../tipo-entidad/mensajes';

@Component({
  selector: 'app-cargo-new',
  templateUrl: './cargo-new.component.html',
  styleUrls: ['./cargo-new.component.css'],
  providers: [ServicioCargoService, ServicioTipoCargoService, ServicioTipoEntidadService]
})
export class CargoNewComponent implements OnInit {
  unCargo: Cargo = {id:0, cantidad: 0, tipoCargo: {nombre: 'Un tipo cargo'}, tipoEntidad: {nombre: 'Un tipo entidad'}};
  public miFormulario: FormGroup;
  loading = false;
  tiposCargos: Observable<TipoCargo[]>;
  tiposEntidades: Observable<TipoEntidad[]>;

  constructor(private servicio: ServicioCargoService,private servicioTiposCargos: ServicioTipoCargoService,private servicioTipoEntidad: ServicioTipoEntidadService, public globales: Globales, public mensajes: CargoMensajes, public mensajesTipoCargo: TipoCargoMensajes, public mensajesTipoEntidad: TipoEntidadMensajes) {}

  ngOnInit(): void {
    this.buildForm();
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
    this.globales.reload();
    
    // validación del formulario
    if( !this.miFormulario.valid ){
      this.globales.operation_danger = true;
      this.globales.danger_mensaje = this.globales.form_validation_fail;
      return;
    }

    this.loading = true;
    // comprobamos que no exista uno con igual caracteristica (PENDIENTE)
    
    this.servicio.save(this.unCargo).subscribe(
      result => {
        this.loading = false;
        this.globales.operation_success = true;
        this.globales.success_mensaje = this.mensajes.msjs_save;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );
  }
}