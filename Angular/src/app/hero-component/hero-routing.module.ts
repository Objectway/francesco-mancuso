import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponentComponent } from './hero-component.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { EnableHeroPageGuard } from './enable-hero-page.guard';
const routes: Routes = [
  {
    path:'',
    canActivate: [EnableHeroPageGuard],
    component: HeroComponentComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
