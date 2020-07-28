import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/modelo/cargo';
import { Observable } from 'rxjs';
import { ServicioCargoService } from '../../servicios/servicio-cargo.service';
import { Globales } from '../../../globales';
import { CargoMensajes } from '../cargo/mensajes';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
  providers: [ServicioCargoService]
})
export class CargoComponent implements OnInit {
  loading: boolean = false;
  // inicializado únicamente para las pruebas offline
  cargos: Observable<Cargo[]>;

  constructor(private servicio: ServicioCargoService, public globales: Globales, private mensajes: CargoMensajes) { }

  ngOnInit(): void {
    this.globales.reload();
    // Aquí cargar los tipos de cargos
    this.loading = true;
    this.servicio.getAll().subscribe(
      result => {
        this.cargos = result;
        this.loading = false;
          if( this.cargos == null ){
            this.globales.operation_danger = true;
            this.globales.danger_mensaje = this.mensajes.msjs_list_not_ok;
            return;
          }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      }
    );
  }
}