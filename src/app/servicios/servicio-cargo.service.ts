import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cargo } from '../modelo/cargo';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ServicioCargoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(`${environment.API_URI}cargo`);
  }

  getOne(id: string): Observable<any>{
    return this.http.get(`${environment.API_URI}cargo/${id}`);
  }

  save(object: Cargo): Observable<any>{
    return this.http.post( `${environment.API_URI}cargo`,object);
  }

  delete(id: string): Observable<any>{return this.http.delete(`${environment.API_URI}cargo/${id}`);}

  update(object: Cargo):Observable<any>{
    return this.http.put(`${environment.API_URI}cargo/${object.id}`, object);
  }

}