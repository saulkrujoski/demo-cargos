import { Injectable } from '@angular/core';

@Injectable()
export class TipoEntidadMensajes {
    public msjs_duplicate: string = 'El nuevo tipo de entidad que intenta crear ya existe.';
    public msjs_save: string = 'Nuevo tipo de entidad registrado satisfactoriamente.';
    public msjs_not_exist: string = 'El tipo de entidad con identificador único proporcionado es inexistente.';
    public msjs_update: string = 'El tipo de entidad indicado fue modificado satisfactoriamente.';
    public msjs_delete: string = 'El tipo de entidad indicado fue eliminado satisfactoriamente.';
    public msjs_list_ok: string = 'La lista de tipos de entidad fue recuperada satisfactoriamente.';
    public msjs_list_not_ok: string = 'La lista de tipos de rntidad no pudo ser recuperada.';
}