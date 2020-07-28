import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioCargoService } from '../../../servicios/servicio-cargo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Globales } from '../../../../globales';
import { CargoMensajes } from '../mensajes';
import { Cargo } from 'src/app/modelo/cargo';

@Component({
  selector: 'app-cargo-delete',
  templateUrl: './cargo-delete.component.html',
  styleUrls: ['./cargo-delete.component.css'],
  providers: [ServicioCargoService]
})
export class CargoDeleteComponent implements OnInit {
  private clave: string;
  loading: boolean;

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private servicio: ServicioCargoService, public globales: Globales, private mensajes: CargoMensajes) { }

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
    let unCargo: Cargo = null;
    this.servicio.getOne(this.clave).subscribe(
      result => {
        unCargo = result;
        if( unCargo == null ){
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
    // Ahora si lo eliminaremos
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