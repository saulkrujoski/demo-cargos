import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoEntidad } from '../modelo/tipo-entidad';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ServicioTipoEntidadService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(`${environment.API_URI}tipo_entidad`);
  }

  getOne(id: string): Observable<any>{return this.http.get(`${environment.API_URI}tipo_entidad/${id}`);}

  save(object: TipoEntidad): Observable<any>{
    return this.http.post( `${environment.API_URI}tipo_entidad/`,object);
  }

  delete(id: string): Observable<any>{return this.http.delete(`${environment.API_URI}tipo_entidad/${id}`);}

  update(object: TipoEntidad):Observable<any>{
    return this.http.put(`${environment.API_URI}tipo_entidad/${object.id}`, object);
  }
}