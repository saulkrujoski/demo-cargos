import { TipoCargo } from './tipo-cargo';
import { TipoEntidad } from './tipo-entidad';

export interface Cargo {
    id?: number,
    cantidad?: number,
    tipoCargo?: TipoCargo,
    tipoEntidad?: TipoEntidad,
    estado?: boolean
}
