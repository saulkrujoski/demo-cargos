import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { TipoEntidadMensajes } from '../../tipo-entidad/mensajes';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-tipo-entidad-new',
  templateUrl: './tipo-entidad-new.component.html',
  styleUrls: ['./tipo-entidad-new.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadNewComponent implements OnInit {
  unaEntidad: TipoEntidad = {id:0, nombre: ''};
  public miFormulario: FormGroup;
  loading: boolean = false;

  constructor(private servicio: ServicioTipoEntidadService, public globales: Globales, public mensajes: TipoEntidadMensajes) {}

  ngOnInit(): void {
    this.globales.reload();
    this.buildForm();}

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
    // Comprobaremos que no exista
    /*let entidades: TipoEntidad[];
    this.servicio.getAll().subscribe(
      result => {
        entidades = result;
        this.loading = false;
        let i: number = 0;
        while ((entidades[i].nombre != this.unaEntidad.nombre) && (i < entidades.length)) {
          i++;
        }
        this.loading = false;
        if( entidades[i].nombre == this.unaEntidad.nombre ){
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = this.mensajes.msjs_duplicate;
          return;
        }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
        return;
      }
    );*/

    // Ahora si lo registraremos
    this.servicio.save(this.miFormulario.value).subscribe(
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
