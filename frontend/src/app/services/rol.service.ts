import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private myAppUrl: string = 'http://localhost:8080/rol';

  constructor(private http:HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.myAppUrl}`);
  }
}
