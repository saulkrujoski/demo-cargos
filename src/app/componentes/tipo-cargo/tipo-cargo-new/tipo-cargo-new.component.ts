import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { Observable } from 'rxjs';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';

@Component({
  selector: 'app-tipo-cargo-new',
  templateUrl: './tipo-cargo-new.component.html',
  styleUrls: ['./tipo-cargo-new.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoNewComponent implements OnInit {
  unTipo: TipoCargo = {id:0, nombre: ''};
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
    this.globales.reload();
    // validación del formulario
    if( this.miFormulario.valid ){
      this.servicio.save(this.miFormulario.value).subscribe(
        result => {
          this.globales.operation_success = true;
          this.globales.success_mensaje = 'Tipo de Cargo nuevo registrado exitosamente.';
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
