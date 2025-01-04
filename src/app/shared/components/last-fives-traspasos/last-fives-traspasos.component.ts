import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RESTTraspasosByClienteResponse } from '../../../interfaces/RestTraspasosByclienteResponse.interface';
import { ApiService } from '../../../services/api-service';

@Component({
  selector: 'app-last-fives-traspasos',
  standalone: true,
  imports: [  DecimalPipe, DatePipe ],
  templateUrl: './last-fives-traspasos.component.html',

})
export class LastFivesTraspasosComponent {

  @Input({ required: true })
  clientId: string = '';

  public apiTraspasos: RESTTraspasosByClienteResponse[] = [];

  constructor( private apiService: ApiService ){}


  ngOnInit(): void {
    this.apiService.traspasosPorCliente( +this.clientId, 5)
      .subscribe( resp => {
          this.apiTraspasos = resp;
          console.log(this.apiTraspasos);
          console.log('test HFC traspasos');
      });
  }

}
