import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {
  private apiUrl = 'http://localhost:8080/api/validacion'; // URL del backend

  constructor(private http: HttpClient) {}

  validarPlaca(placa: string, fechaHora: string): Observable<any> {
    return this.http.post(this.apiUrl, { placa, fechaHora });
  }
}
