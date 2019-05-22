import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmActionsComponent } from './film-actions/film-actions.component';
import { filmDetailsResolver } from './resolvers/film-details.resolver';
import { FilmYearPipe } from './home/film-year.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmDetailsComponent,
    FilmActionsComponent,
    FilmYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    filmDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
