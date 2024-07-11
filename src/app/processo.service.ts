import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Processo } from './processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  private apiUrl = 'http://localhost:8080/api/processos';

  constructor(private http: HttpClient) { }

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.apiUrl);
  }

  createProcesso(formData: FormData): Observable<Processo> {
    return this.http.post<Processo>(this.apiUrl, formData);
  }

  updateProcesso(processo: Processo): Observable<Processo> {
    return this.http.put<Processo>(`${this.apiUrl}/${processo.id}`, processo);
  }

  deleteProcesso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getProcessoById(id: number): Observable<Processo> {
    return this.http.get<Processo>(`${this.apiUrl}/${id}`);
  }
}
