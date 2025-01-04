import { Pago } from "./pago.interface";



export interface RESTPagosResponse {
    registros: number | null;
    pagos:     Pago[];
}