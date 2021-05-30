import { Matricula } from './../models/matricula.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private listaMatricula: any[];
  private matriculasUrl = 'http://localhost:8080/matriculas';

  constructor(private httpClient: HttpClient) {
    this.listaMatricula = [];
  }

  get matriculas(){
    return this.listaMatricula;
  }

  todas(): Observable<Matricula[]>{
    return this.httpClient.get<Matricula[]>(this.matriculasUrl);
  }

  adiciona(matricula : Matricula): Observable<Matricula>{
    this.hidratar(matricula);
    return this.httpClient.post<Matricula>(this.matriculasUrl, matricula);
  }

  private hidratar(matricula : any){
    matricula.data = new Date();

  }

}
