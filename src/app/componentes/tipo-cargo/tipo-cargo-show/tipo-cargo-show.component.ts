import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../../globales';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { ServicioTipoCargoService } from '../../../servicios/servicio-tipo-cargo.service';
import { TipoCargoMensajes } from '../../tipo-cargo/mensajes';
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
loading: boolean = false;

constructor(private rutaActiva: ActivatedRoute,private servicio: ServicioTipoCargoService, public globales: Globales, public mensajes: TipoCargoMensajes) { }

  ngOnInit(): void {
    this.globales.reload();
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.clave = params.id;
      }
    );
    this.loading = true;
    // Aquí se recuperan los datos del objeto
    this.servicio.getOne(this.clave).subscribe(
      result => {
          this.unTipo = result;
          this.loading = false;
          if( this.unTipo == null ){
            this.globales.operation_danger = true;
            this.globales.danger_mensaje = this.mensajes.msjs_not_exist;
          }
      },
      error => {
        this.loading = false;
        this.globales.operation_danger = true;
        this.globales.danger_mensaje = this.globales.mensaje_servidor_generic_error;
      });
  }
}
