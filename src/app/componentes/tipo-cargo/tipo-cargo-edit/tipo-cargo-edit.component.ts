import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { Observable } from 'rxjs';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';

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

constructor(private servicio: ServicioTipoCargoService, public globales: Globales) {}

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
  console.log('Estos son los nuevos valores: ', this.unTipo);
  this.globales.reload();
  // validación del formulario
  if( this.miFormulario.valid ){
    this.servicio.update(this.unTipo).subscribe(
      result => {
        this.globales.operation_success = true;
        this.globales.success_mensaje = 'El Tipo Cargo modificado exitosamente.';
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