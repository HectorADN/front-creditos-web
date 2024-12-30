import { Component } from '@angular/core';
import { Cliente } from '../../../interfaces/cliente.interface';
import { ApiService } from '../../../services/api-service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [],
  templateUrl: './client-list.component.html',
})
export class ClientListComponent {


  clientes: Cliente[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.jsonAllClientes()
      .subscribe( resp => {
        this.clientes = resp;
        console.log(resp);
      });
  }

}
