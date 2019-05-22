import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';
import { filmDetailsResolver } from './resolvers/film-details.resolver';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'film-details/:filmId',
    component: FilmDetailsComponent,
    resolve:{
      filmDetails: filmDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
