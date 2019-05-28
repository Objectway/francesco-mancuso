import { Component, OnInit } from '@angular/core';
import { ShopListService } from '../services/shop-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  price:number;
  quantity:number;
  name:string;
  constructor(private ShopListService:ShopListService, private router:Router) { }

  ngOnInit() {
    this.ShopListService.pippo.subscribe( response => {
      localStorage.setItem(response.name,JSON.stringify(response));
    })
  }
  Add(){
    let item={
      name:(this.name).toUpperCase(),
      quantity:this.quantity,
      price:this.price,
      total:this.price*this.quantity
    }
    this.ShopListService.addItem(item);
  }
  goToTicket(){
    this.router.navigate(['/ticket'])
  }
}
