import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Globales } from '../../../../globales';
import { TipoCargoMensajes } from '../mensajes';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';

@Component({
  selector: 'app-tipo-cargo-delete',
  templateUrl: './tipo-cargo-delete.component.html',
  styleUrls: ['./tipo-cargo-delete.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoDeleteComponent implements OnInit {
  private clave: string;
  loading: boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private servicio: ServicioTipoCargoService, public globales: Globales, private mensajes: TipoCargoMensajes) { }

  ngOnInit(): void {}

  delete():void {
    this.loading = true;
    this.globales.reload();
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );
    // Comprobaremos si existe
    let unTipo: TipoCargo = null;
    this.servicio.getOne(this.clave).subscribe(
      result => {
        unTipo = result;
        if( unTipo == null ){
          this.loading = false;
          this.globales.operation_danger = true;
          this.globales.danger_mensaje = this.mensajes.msjs_not_exist;
          return;
        }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
        return;
      }
    );

    // Ahora lo eliminaré
    this.servicio.delete(this.clave).subscribe(
      result => {
        this.loading = false;
        this.globales.operation_success = true;
        this.globales.success_mensaje = this.mensajes.msjs_delete;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );
  }
}
