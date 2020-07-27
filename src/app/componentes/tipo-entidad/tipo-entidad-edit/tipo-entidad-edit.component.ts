import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';

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

constructor(private servicio: ServicioTipoEntidadService, public globales: Globales) {}

ngOnInit(): void {this.buildForm();}

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
  console.log('Estos son los nuevos valores: ', this.unaEntidad);
  this.globales.reload();
  // validación del formulario
  if( this.miFormulario.valid ){
    this.servicio.update(this.unaEntidad).subscribe(
      result => {
        this.globales.operation_success = true;
        this.globales.success_mensaje = 'El Tipo de Entidad modificada exitosamente.';
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
