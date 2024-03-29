import { Component, OnInit } from '@angular/core';
import { Applicant } from '../_models';
import { ApplicantService } from '../_services/applicant.service';


@Component({
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  loading = false;
  applicants: Applicant[];


  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getList().subscribe(
      response => {
        console.log(response.data);
        this.applicants = response.data;
      }
    );

  }

}
