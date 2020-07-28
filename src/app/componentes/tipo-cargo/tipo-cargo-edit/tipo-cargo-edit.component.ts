import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { TipoCargoMensajes } from '../../tipo-cargo/mensajes';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tipo-cargo-edit',
  templateUrl: './tipo-cargo-edit.component.html',
  styleUrls: ['./tipo-cargo-edit.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoEditComponent implements OnInit {
  // Datos inicializados para pruebas offline
  unTipo: TipoCargo = {id: 1, nombre: 'Un tipo cargo'};
  public miFormulario: FormGroup;
  private clave: string;
  loading = false;
  constructor(private rutaActiva: ActivatedRoute, private servicio: ServicioTipoCargoService, public globales: Globales, public mensajes: TipoCargoMensajes) {}

ngOnInit(): void {
  this.buildForm();
  this.globales.reload();
  this.rutaActiva.params.subscribe(
    (params: Params) => {
      this.clave = params.id;
    }
  );
  this.loading = true;
  // Recuperamos al objeto
  this.servicio.getOne(this.clave).subscribe(
    result => {
      this.unTipo = result;
      this.loading = false;
      if( this.unTipo == null ){
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
    this.loading = true;
    // validación del formulario
    if( !this.miFormulario.valid ){
      this.loading = false;
      this.globales.operation_danger = true;
      this.globales.danger_mensaje = this.globales.form_validation_fail;
      return;
    }

    // comprobamos que no exista uno con igual caracteristica (PENDIENTE)

    // Ahora si lo almacenaremos
    this.servicio.update(this.unTipo).subscribe(
      result => {
        this.loading = false;
        this.globales.operation_success = true;
        this.globales.success_mensaje = this.mensajes.msjs_update;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );
  }
}