import { Component, OnInit } from '@angular/core';
import { ShopListService } from '../services/shop-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {
  public ticketnumber:number=20;
  public ticketvalue:number;
  public tickettouse:number;
  public dascontare:number;
  constructor(private ShopListService:ShopListService, private router:Router) { }

  ngOnInit() {
  }
  usaTicket(){
  this.dascontare=this.ticketvalue*this.tickettouse
  this.ShopListService.dascontare=this.dascontare;
  console.log(this.ShopListService.dascontare);
  this.router.navigate(['/'])
  }
  goback(){
    this.router.navigate(['/'])
  }
}
