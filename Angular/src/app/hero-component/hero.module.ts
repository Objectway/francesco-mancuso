import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponentComponent } from './hero-component.component';
import { HeroService } from './hero.service'
@NgModule({
  declarations: [
    HeroComponentComponent
  ],
  exports:[
    HeroComponentComponent
  ],
  providers: [
    HeroService
  ],
  imports: [
    CommonModule
  ]
})
export class HeroModule { }
