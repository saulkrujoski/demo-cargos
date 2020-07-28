import { Injectable } from '@angular/core';

@Injectable()
export class Globales {
  public mensaje_servidor_generic_error: string = 'Ha ocurrido un error durante el intento de conexión con el Servidor de Datos.';
  public danger_mensaje: string = '';
  public warning_mensaje: string = '';
  public success_mensaje: string = '';
  public operation_success: boolean = false;
  public operation_danger: boolean = false;
  public operation_warning: boolean = false;
  public form_validation_fail: string = 'Algo ocurrio con la validación del formulario, revisa los mensajes para cada campo.';

  public function ;reload() {
    this.success_mensaje = '';
    this.warning_mensaje = '';
    this.danger_mensaje = '';
    this.operation_success = false;
    this.operation_warning = false;
    this.operation_danger = false;
  }

}