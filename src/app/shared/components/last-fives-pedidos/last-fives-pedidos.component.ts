import { Component, Input } from '@angular/core';
import { ApiService } from '../../../services/api-service';
import { RESTPedidosResponse } from '../../../interfaces/RestPedidosResponse.interface';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-last-fives-pedidos',
  standalone: true,
  imports: [ DecimalPipe, DatePipe ],
  templateUrl: './last-fives-pedidos.component.html',
})
export class LastFivesPedidosComponent {

@Input({ required: true }) clientId: string = '';

public pedidos: RESTPedidosResponse[] = [];

constructor( private apiService: ApiService ){

}

ngOnInit(): void {
  this.apiService.ultimosPedidos( +this.clientId, 5)
    .subscribe( resp => {
        this.pedidos = resp;
        // console.log(this.pedidos);
    });

}





}
