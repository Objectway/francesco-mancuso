import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponentComponent } from './hero-component/hero-component.component';
// import { AppHighlightDirective } from './app-highlight.directive';
// import { HeroModule } from './hero-component/hero.module';
import { BaseComponent } from './base/base.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
