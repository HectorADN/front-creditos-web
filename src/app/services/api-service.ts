import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';
import { RESTPedidosResponse } from '../interfaces/RestPedidosResponse.interface';
import { RESTPagosResponse } from '../interfaces/RestPagosResponse.interface';
import { RESTTraspasosByClienteResponse } from '../interfaces/RestTraspasosByclienteResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://backcreditos.ec-comercial.com/api';
  // private apiUrl: string = 'http://localhost/backcreditos/public/api';

  private myUrl: string = '';

  constructor(private http: HttpClient) { }


  // Listo
  jsonAllClientes(): Observable<Cliente[]>{
    // alert('Consultando Api REST!');
    this.myUrl = `${ this.apiUrl }/listaclientesjson`;
    return this.http.get<Cliente[]>(this.myUrl);
  }

  // Listo
  getClientById( id: string ): Observable<Cliente>{
    // alert('Consultando Api REST!');
    this.myUrl = `${ this.apiUrl }/clienteporid/${id}`;
    return this.http.get<Cliente>(this.myUrl);
  }


  ultimosPedidos(idCliente: number, registros: number): Observable<RESTPedidosResponse[]>{
    this.myUrl = `${ this.apiUrl }/ultimospedidos/${idCliente}/${registros}`;
    // console.log(this.myUrl);
    return this.http.get<RESTPedidosResponse[]>(this.myUrl);
  }


  pagosPorCliente(idCliente: number, registros: number): Observable<any>{
    this.myUrl = `${ this.apiUrl }/ultimospagosbycliente/${idCliente}/${registros}`;
    return this.http.get<any>(this.myUrl);
  }

  traspasosPorCliente(idCliente: number, registros: number): Observable<RESTTraspasosByClienteResponse[]>{
    this.myUrl = `${ this.apiUrl }/traspasosbycliente/${idCliente}/${registros}`;
    return this.http.get<RESTTraspasosByClienteResponse[]>(this.myUrl);
  }
  
}
