import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Applicant } from '@app/_models';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const apiUrl = "http://rhtest.test/api";
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

interface IResponse
{
  succes: string
  data: Applicant[]
};

@Injectable({
  providedIn: 'root'
})


export class ApplicantService {



    constructor(private http: HttpClient) {}

    getList(){
      return this.http.get<IResponse>(`${apiUrl}/applicants`, httpOptions);
    }

    getAll(): Observable<Applicant[]>{
      return this.http.get<Applicant[]>(`${apiUrl}/applicants`, httpOptions)
      .pipe(
        tap(heroes => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      );
    }



    addApplicant (applicant): Observable<Applicant> {
   
      return this.http.post<Applicant>(`${apiUrl}/applicants`, applicant, httpOptions).pipe(
        tap((todo: Applicant) => console.log(`added todo w/ id=${todo.id}`)),
        catchError(this.handleError<Applicant>('addTodo'))
      )};

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
       
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}