import { Detalle } from "./detalle.interface";


export interface RESTPedidosResponse {
    id:          string;
    fecha:       Date;
    nombre:      string;
    monto:       number;
    abono:       number;
    saldo:       number;
    estado:      string;
    clientes_id: number;
    items:       Detalle[];
}