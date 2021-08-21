import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl: string = 'http://localhost:8080/usuario';

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}`);
  }
}
