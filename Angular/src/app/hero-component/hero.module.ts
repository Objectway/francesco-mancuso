import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponentComponent } from './hero-component.component';
import { HeroService } from './hero.service'
import { AppHighlightDirective } from '../app-highlight.directive';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
@NgModule({
  declarations: [
    HeroComponentComponent,
    AppHighlightDirective,
    HeroDetailComponent
  ],
  exports:[
    HeroComponentComponent,
    AppHighlightDirective,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
})
export class HeroModule { }
