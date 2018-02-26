import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Hotel} from './hotel'
import { City } from './city';

const webApi ="http://localhost:32898/api/";
@Injectable()
export class HotelService {

  constructor(private http:HttpClient) { }

  getHotelResults (cityCode:string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${webApi}Hotel/GetResult?cityCode=${cityCode}` )
      .pipe(
        tap(hotels => console.log(`fetched Hotel`)),
        catchError(this.handleError('getHotelReusults', []))
      );
  }

  getHotelById (id:string):Observable<Hotel>{
    return this.http.get<Hotel>(`${webApi}Hotel/getHotelById?id=${id}` )
      .pipe(
        tap(hotels => console.log(`fetched Hotel`)),
        catchError(this.handleError('getHotelReusults', null))
      );
  }
  getCityByCode (code:string):Observable<City>{
    return this.http.get<City>(`${webApi}Hotel/GetCityByCode?code=${code}` )
      .pipe(
        tap(city => console.log(`fetched City`)),
        catchError(this.handleError('getCityReusults', null))
      );
  }

  searchCity(term:string):Observable<City[]>{
    console.log("searchCity" + term);
    if(!term.trim()){
        return of([])
    }

    return this.http.get<City[]>(webApi + `/Hotel/GetCitiesByCondition?term=`+ term).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<City[]>('searchHotels',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {   
      console.error(error);     
      this.log(`${operation} failed: ${error.message}`);    
      return of(result as T);
    };
  }

private log(message: string) {
  console.log(message);
}
}
