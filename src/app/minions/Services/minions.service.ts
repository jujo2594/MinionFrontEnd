import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Minion } from '../Interfaces/minion.interface';

@Injectable({providedIn: 'root'})
export class MinionService {
  private baseUrl : string = "https://localhost:7194";
  constructor(private http: HttpClient){ }

  getMinions(): Observable<Minion[]> {
    return this.http.get<Minion[]>(`${ this.baseUrl }/Minion`)
  }

  getMinionById( id : string): Observable< Minion | undefined > {
    return this.http.get<Minion>(`${this.baseUrl}/Minion/${id}`)
      .pipe(
        catchError( error => of(undefined))
      );
  }

  getSuggestions( query : string ): Observable<Minion[]> {
    return this.http.get<Minion[]>(`${ this.baseUrl }/Minion?q=${ query }&_limit=5`)
  }

  addMinion( minion : Minion ): Observable<Minion>{
    return this.http.post<Minion>(`${ this.baseUrl }/Minion`, minion);
  }

  updateMinion( minion : Minion ): Observable<Minion>{
    if(!minion.id) throw Error('Minion id is required');

    return this.http.put<Minion>(`${ this.baseUrl }/Minion/${ minion.id }`, minion);
  }

  deleteMinion( id : string ): Observable<boolean>{
    return this.http.delete(`${ this.baseUrl }/Minion/${ id }`)
    .pipe(
      catchError( error => of(false)),
      map( response => true));
  }
}
