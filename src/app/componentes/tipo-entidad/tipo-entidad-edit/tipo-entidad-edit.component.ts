import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { TipoEntidadMensajes } from '../../tipo-entidad/mensajes';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tipo-entidad-edit',
  templateUrl: './tipo-entidad-edit.component.html',
  styleUrls: ['./tipo-entidad-edit.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadEditComponent implements OnInit {
  // Datos inicializados para pruebas offline
  unaEntidad: TipoEntidad = {id: 1, nombre: 'Un tipo cargo'};
  public miFormulario: FormGroup;
  loading: boolean = false;
  clave: string;

  constructor(private servicio: ServicioTipoEntidadService,private rutaActiva: ActivatedRoute, public globales: Globales, public mensajes: TipoEntidadMensajes) {}

ngOnInit(): void {
  this.buildForm();
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

// Controles para los formularios
private buildForm():void{
  this.miFormulario = new FormGroup({
    nombre: new FormControl('',[Validators.required])
  });
}

get nombre(){ return this.miFormulario.get('nombre');}

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
    this.servicio.update(this.unaEntidad).subscribe(
      result => {
        this.loading = false;
        this.globales.operation_success = true;
        this.globales.success_mensaje = this.mensajes.msjs_update;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      });
    }
}
