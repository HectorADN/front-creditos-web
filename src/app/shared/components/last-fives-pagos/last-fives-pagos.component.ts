import { Component, Input } from '@angular/core';
import { ApiService } from '../../../services/api-service';
import { RESTPagosResponse } from '../../../interfaces/RestPagosResponse.interface';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Pago } from '../../../interfaces/pago.interface';

@Component({
  selector: 'app-last-fives-pagos',
  standalone: true,
  imports: [ DecimalPipe, DatePipe ],
  templateUrl: './last-fives-pagos.component.html',
})
export class LastFivesPagosComponent {

  @Input({ required: true })
  clientId: string = '';

  public apiPagos: Pago[] = [];

  constructor( private apiService: ApiService ){}


  ngOnInit(): void {
    this.apiService.pagosPorCliente( +this.clientId, 5)
      .subscribe( resp => {
          this.apiPagos = resp;
          console.log(resp);
          console.log('test HFC');
      });
  }


}
