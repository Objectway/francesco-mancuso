import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { BaseComponent } from './base/base.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BaseComponent
  },
  {
    path: 'heroes',
    loadChildren: './hero-component/hero.module#HeroModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
