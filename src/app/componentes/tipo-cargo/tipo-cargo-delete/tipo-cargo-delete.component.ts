import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Globales } from '../../../../globales';

@Component({
  selector: 'app-tipo-cargo-delete',
  templateUrl: './tipo-cargo-delete.component.html',
  styleUrls: ['./tipo-cargo-delete.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoDeleteComponent implements OnInit {
  private clave: string;
  loading: boolean;

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private servicio: ServicioTipoCargoService, public globales: Globales) { }

  ngOnInit(): void {}

  delete():void {
    
    this.loading = true;
    this.globales.reload();
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );
    this.servicio.delete(this.clave).subscribe(
      result => {
        this.loading = false;
        this.globales.operation_success = true;
        this.globales.success_mensaje = 'Tipo de Cargo eliminado satisfactoriamente.';
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos. El estado devuelto es (' + error['status'] + ').';
      }
    );
  }
}
