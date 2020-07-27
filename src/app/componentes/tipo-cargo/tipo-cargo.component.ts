import { Component, OnInit } from '@angular/core';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { Observable } from 'rxjs';
import { ServicioTipoCargoService } from '../../servicios/servicio-tipo-cargo.service';
import { Globales } from '../../../globales';

@Component({
  selector: 'app-tipo-cargo',
  templateUrl: './tipo-cargo.component.html',
  styleUrls: ['./tipo-cargo.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoComponent implements OnInit {
  loading: boolean = false;
  // inicializado únicamente para las pruebas offline
  tipos: TipoCargo[] = [
    {id:1, nombre:'Un Tipo Cargo 1'},
    {id:2, nombre:'Un Tipo Cargo 2'}
  ];

  constructor(private servicio: ServicioTipoCargoService, public globales: Globales) { }

  ngOnInit(): void {
    this.globales.reload();
    // Aquí cargar los tipos de cargos
    this.loading = true;
    this.servicio.getAll().subscribe(
      result => {
        this.loading = false;
        this.tipos = result;
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos para recuperar la lista de Tipos de Cargo. El estado devuelto es (' + error['status'] + ').';
      }
    );
  }
}
