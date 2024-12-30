import { InfoEnvases } from "./info-envases.interface";


export interface Cliente{
    id?: number | null;
    rut: string | null;
    nombre: string | null;
    descripcion: string | null;
    direccion: string | null;
    deudor?: string | null;
    envases?: InfoEnvases[] | null;
}