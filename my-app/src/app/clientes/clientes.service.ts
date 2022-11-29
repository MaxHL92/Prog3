import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {}
  URL_BACKEND = 'http://localhost:3000';
  
  getClientes(): Observable <any> {
    return this.http.get(`${this.URL_BACKEND}/clientes/getAll`)
  }

  getCliente(id:number): Observable <any> {
  return this.http.get(`${this.URL_BACKEND}/clientes/getCliente/${id}`)
  }

  deleteCliente(id:number): Observable <any> {
    return this.http.delete(`${this.URL_BACKEND}/clientes/deleteCliente/${id}`)
    }

  createCliente(cliente: any): Observable <any> {
    return this.http.post(`${this.URL_BACKEND}/clientes/createCliente`, cliente)
    }

  editCliente(id:number, cliente: any): Observable <any> {
    return this.http.put(`${this.URL_BACKEND}/clientes/editarCliente/${id}`, cliente)
    }

}
