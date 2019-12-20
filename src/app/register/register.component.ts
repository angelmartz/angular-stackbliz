import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplicantService } from '../_services';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  applicantForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder, 
    private applicantService: ApplicantService,
    private router: Router) 
  { }

  ngOnInit() {
    this.applicantForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      job_title: ['', Validators.required],
      scholarship: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  registerSubmit() {
    this.isSubmitted = true;

    if(this.applicantForm.invalid){
      return ;
    }

    this.applicantService.addApplicant(this.applicantForm.value)
      .subscribe(res => {
          //let id = res['id'];
          this.router.navigate(['/psicotest']);
        }, (err) => {
          console.log(err);
        });

  }
  get formControls() { 
    return this.applicantForm.controls; 
  }
}
