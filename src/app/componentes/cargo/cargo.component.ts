import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/modelo/cargo';
import { Observable } from 'rxjs';
import { ServicioCargoService } from '../../servicios/servicio-cargo.service';
import { Globales } from '../../../globales';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
  providers: [ServicioCargoService]
})
export class CargoComponent implements OnInit {
  loading: boolean = false;
  // inicializado únicamente para las pruebas offline
  cargos: Cargo[] = [
    {id: 1, cantidad: 3, tipoCargo:{id:1, nombre:'Un Tipo Cargo 1'}, tipoEntidad:{id:1, nombre:'Un Tipo Entidad 1'}, estado: true},
    {id: 2, cantidad: 5, tipoCargo:{id:2, nombre:'Un Tipo Cargo 2'}, tipoEntidad:{id:2, nombre:'Un Tipo Entidad 2'}, estado: false}
  ];

  constructor(private servicio: ServicioCargoService, public globales: Globales) { }

  ngOnInit(): void {
    this.globales.reload();
    // Aquí cargar los tipos de cargos
    /*this.loading = true;
    this.servicio.getAll().subscribe(
      result => {
        this.loading = false;
        this.cargos = result;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos para recuperar la lista de Tipos de Cargo. El estado devuelto es (' + error['status'] + ').';
      }
    );*/
  }
}