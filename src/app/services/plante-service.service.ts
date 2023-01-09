import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plante } from '../plante';

@Injectable({
  providedIn: 'root'
})
export class PlanteServiceService {

 private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPlantes(): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.apiServerUrl}/plante/all`);
  }

  public addPlante(plante: Plante): Observable<Plante> {
    return this.http.post<Plante>(`${this.apiServerUrl}/plante/add`, plante);
  }

  public updatePlante(plante: Plante): Observable<Plante> {
    return this.http.put<Plante>(`${this.apiServerUrl}/plante/update`, plante);
  }

  public deletePlante(planteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/plante/delete/${planteId}`);
  }
}

