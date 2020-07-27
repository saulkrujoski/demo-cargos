import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioTipoEntidadService } from '../../../servicios/servicio-tipo-entidad.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Globales } from '../../../../globales';

@Component({
  selector: 'app-tipo-entidad-delete',
  templateUrl: './tipo-entidad-delete.component.html',
  styleUrls: ['./tipo-entidad-delete.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadDeleteComponent implements OnInit {
  private clave: string;
  loading: boolean;

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private servicio: ServicioTipoEntidadService, public globales: Globales) { }

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
        this.globales.success_mensaje = 'Tipo de Entidad eliminada satisfactoriamente.';
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
