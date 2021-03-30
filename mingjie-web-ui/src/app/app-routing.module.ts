import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './landing/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account',
    children: [
      { path: 'login', component: RegisterComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
