import { Injectable } from '@angular/core';

@Injectable()
export class TipoCargoMensajes {
    public msjs_duplicate: string = 'El nuevo tipo de cargo que intenta crear ya existe.';
    public msjs_save: string = 'Nuevo tipo de cargo registrado satisfactoriamente.';
    public msjs_not_exist: string = 'El tipo de cargo con identificador único proporcionado es inexistente.';
    public msjs_update: string = 'El tipo de cargo indicado fue modificado satisfactoriamente.';
    public msjs_delete: string = 'El tipo de cargo indicado fue eliminado satisfactoriamente.';
    public msjs_list_ok: string = 'La lista de tipos de cargo fue recuperada satisfactoriamente.';
    public msjs_list_not_ok: string = 'La lista de tipos de cargo no pudo ser recuperada.';
}