import { Rol } from './rol';
export interface Usuario {
    id: number;
    nombre: string;
    activo: boolean;
    idRol: number;
    userRol: Rol;
}