import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';

@Component({
  selector: 'app-tipo-entidad-new',
  templateUrl: './tipo-entidad-new.component.html',
  styleUrls: ['./tipo-entidad-new.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadNewComponent implements OnInit {
  unaEntidad: TipoEntidad = {id:0, nombre: ''};
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
    this.globales.reload();
    // validación del formulario
    if( this.miFormulario.valid ){
      this.servicio.save(this.miFormulario.value).subscribe(
        result => {
          this.globales.operation_success = true;
          this.globales.success_mensaje = 'Tipo de Entidad nueva registrada exitosamente.';
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
