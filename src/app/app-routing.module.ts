import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { ApplicantComponent } from './applicant/applicant.component';
import { PsicoTestComponent } from './psico-test/psico-test.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'start', component: RegisterComponent},
  { path: 'applicants', component: ApplicantComponent},
  { path: 'psicotest', component: PsicoTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
