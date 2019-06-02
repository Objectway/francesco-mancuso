import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Rotta1Component } from './rotta1/rotta1.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path:'rotta1',
    component:Rotta1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
