import { Component, OnInit } from '@angular/core';
import { TipoEntidad } from 'src/app/modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { ServicioTipoEntidadService } from '../../servicios/servicio-tipo-entidad.service';
import { Globales } from '../../../globales';

@Component({
  selector: 'app-tipo-entidad',
  templateUrl: './tipo-entidad.component.html',
  styleUrls: ['./tipo-entidad.component.css'],
  providers: [ServicioTipoEntidadService]
})
export class TipoEntidadComponent implements OnInit {
  loading: boolean = false;
  // inicializado únicamente para las pruebas offline
  tipos: TipoEntidad[] = [
    {id:1, nombre:'Un Tipo Entidad 1'},
    {id:2, nombre:'Un Tipo Entidad 2'}
  ];

  constructor(private servicio: ServicioTipoEntidadService, public globales: Globales) { }

  ngOnInit(): void {
    this.globales.reload();
    // Aquí cargar los tipos de Entidades
    this.loading = true;
    this.servicio.getAll().subscribe(
      result => {
        this.loading = false;
        this.tipos = result;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos para recuperar la lista de Tipos de Entidad. El estado devuelto es (' + error['status'] + ').';
      }
    );
  }
}
