import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Applicant } from '@app/_models';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Applicant[]>('http://rhtest.test/api/applicants');
  }

  getDatos(){
    return this.http.get<any>('http://rhtest.test/api/applicants').pipe(map(
      applicant => {
        (applicant.data);
      }
    ));
  }

}
