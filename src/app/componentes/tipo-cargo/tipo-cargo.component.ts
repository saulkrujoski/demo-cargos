import { Component, OnInit } from '@angular/core';
import { TipoCargo } from 'src/app/modelo/tipo-cargo';
import { Observable } from 'rxjs';
import { ServicioTipoCargoService } from '../../servicios/servicio-tipo-cargo.service';
import { Globales } from '../../../globales';
import { TipoCargoMensajes } from '../tipo-cargo/mensajes';

@Component({
  selector: 'app-tipo-cargo',
  templateUrl: './tipo-cargo.component.html',
  styleUrls: ['./tipo-cargo.component.css'],
  providers: [ServicioTipoCargoService]
})
export class TipoCargoComponent implements OnInit {
  loading: boolean = false;
  tipos: Observable<TipoCargo[]>;

  constructor(private servicio: ServicioTipoCargoService, public globales: Globales, private mensajes: TipoCargoMensajes) { }

  ngOnInit(): void {
    this.globales.reload();
    // Aquí cargar los tipos de cargos
    this.loading = true;
    this.servicio.getAll().subscribe(
      result => {
        this.loading = false;
        this.tipos = result;
        if( this.tipos == null ){
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