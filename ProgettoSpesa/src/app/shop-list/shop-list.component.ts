import { Component, OnInit, SimpleChange } from '@angular/core';

import { ShopListService } from '../services/shop-list.service';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  public list:any[];
  public totale:number;
  public dascontare:number;
  public totalenetto:number;
  constructor(private ShopListService:ShopListService) { }

  ngOnInit() {
  this.list=this.ShopListService.getList();
  console.log(this.list)
  this.totale=this.ShopListService.getTotal();
  this.dascontare=this.ShopListService.dascontare;
  }
  ngDoCheck(){
   this.list=this.ShopListService.getList();
   this.totale=this.ShopListService.getTotal();
   this.dascontare=this.ShopListService.dascontare;
  }
  getTotaleNetto(){
    return this.ShopListService.getTotaleNetto();
  }
  deleteitem(key){
    this.ShopListService.removeitem(key);
  }
}
