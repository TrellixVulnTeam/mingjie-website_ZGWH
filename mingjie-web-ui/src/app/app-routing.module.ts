import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './landing/home/home.component';
import { LionChillComponent } from './project/lion-chill/lion-chill.component';
import { ShyBirdsComponent } from './project/shy-birds/shy-birds.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account',
    children: [
      { path: 'login', component: RegisterComponent },
    ]
  },
  {
    path: 'project',
    children: [
      { path: 'lion', component: LionChillComponent },
      { path: 'birds', component: ShyBirdsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
