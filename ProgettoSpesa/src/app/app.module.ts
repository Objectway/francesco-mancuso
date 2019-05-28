import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShopListComponent,
    TicketPageComponent
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
