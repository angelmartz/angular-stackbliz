import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Answer } from '../../_models';

const apiUrl = "http://rhtest.test/api";
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
interface IResponse{
  data: Answer[]
}

@Injectable({
  providedIn: 'root'
})
export class PsicotestService {

  constructor(private http: HttpClient) {}



  getAns() {
    return this.http.get<IResponse>(`${apiUrl}/answers`, httpOptions);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
