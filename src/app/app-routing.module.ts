
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobBoardComponent } from './job-board/job-board.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: '', component: JobBoardComponent},
  { path: 'sign-in', component: SigninComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  JobBoardComponent,
  SigninComponent,
  RegisterComponent
];