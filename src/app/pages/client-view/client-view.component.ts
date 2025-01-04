import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../interfaces/cliente.interface';
import { LastFivesPedidosComponent } from "../../shared/components/last-fives-pedidos/last-fives-pedidos.component";
import { LastFivesPagosComponent } from "../../shared/components/last-fives-pagos/last-fives-pagos.component";
import { LastFivesTraspasosComponent } from "../../shared/components/last-fives-traspasos/last-fives-traspasos.component";


@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [LastFivesPedidosComponent, LastFivesPagosComponent, LastFivesTraspasosComponent],
  templateUrl: './client-view.component.html',
})

export class ClientViewComponent {

  public clientId: string = '';
  
  public cliente: Cliente = {
    id: null,
    rut: null,
    nombre: null,
    descripcion: null,
    direccion: null,
    deudor: null,
    envases: [],
  };



  constructor(private apiService: ApiService,
              private route: ActivatedRoute){}


  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id')!;
    this.apiService.getClientById(this.clientId)
    .subscribe( resp => {
        this.cliente = resp;
    });
  }


}
