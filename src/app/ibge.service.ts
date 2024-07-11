import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private estadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  private municipiosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any[]> {
    return this.http.get<any[]>(this.estadosUrl);
  }

  getMunicipios(uf: string): Observable<any[]> {
    const url = this.municipiosUrl.replace('{UF}', uf);
    return this.http.get<any[]>(url);
  }
}
