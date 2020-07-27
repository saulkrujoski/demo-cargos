import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipo-cargo-show',
  templateUrl: './tipo-cargo-show.component.html',
  styleUrls: ['./tipo-cargo-show.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoShowComponent implements OnInit {
// se inicializan los datos para pruebas offline
unTipo: TipoCargo = {id:1, nombre: 'Un tipo cargo'};
private clave: string;

constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioTipoCargoService, public globales: Globales) { }

ngOnInit(): void {
  this.globales.reload();
  this.rutaActiva.params.subscribe(
    (params: Params) => {
      this.clave = params.id;
    }
  );
  
  // Aquí se recuperan los datos del objeto
  this.servicio.getOne(this.clave).subscribe(
    result => {
        this.unTipo = result;
    },
    error => {
      this.globales.operation_danger = true;
      this.globales.danger_mensaje = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos.';
    }
  );
}

}
