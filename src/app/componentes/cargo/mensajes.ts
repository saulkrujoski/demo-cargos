import { Injectable } from '@angular/core';

@Injectable()
export class CargoMensajes {
    public msjs_duplicate: string = 'El nuevo cargo que intenta crear ya existe.';
    public msjs_save: string = 'Nuevo cargo registrado satisfactoriamente.';
    public msjs_not_exist: string = 'El cargo con identificador único proporcionado es inexistente.';
    public msjs_update: string = 'El cargo indicado fue modificado satisfactoriamente.';
    public msjs_delete: string = 'El cargo indicado fue eliminado satisfactoriamente.';
    public msjs_list_ok: string = 'La lista de cargos fue recuperada satisfactoriamente.';
    public msjs_list_not_ok: string = 'La lista de cargos no pudo ser recuperada.';
}