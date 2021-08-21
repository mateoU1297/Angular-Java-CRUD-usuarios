import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl: string = 'http://localhost:8080/usuario';

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.myAppUrl}/delete/${id}`);
  }
}
