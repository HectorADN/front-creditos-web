import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

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
  
}
