import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoCargo } from '../modelo/tipo-cargo';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ServicioTipoCargoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(`${environment.API_URI}tipo_cargo`);
  }

  getOne(id: string): Observable<any>{return this.http.get(`${environment.API_URI}tipo_cargo/${id}`);}

  save(object: TipoCargo): Observable<any>{
    return this.http.post( `${environment.API_URI}tipo_cargo/`,object);
  }

  delete(id: string): Observable<any>{return this.http.delete(`${environment.API_URI}tipo_cargo/${id}`);}

  update(object: TipoCargo):Observable<any>{
    return this.http.put(`${environment.API_URI}tipo_cargo/${object.id}`, object);
  }

}