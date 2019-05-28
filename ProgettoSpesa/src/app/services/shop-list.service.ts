import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  pippo: Subject<any> = new Subject<any>();
  dascontare:number=0;
  itemlist:any[]=[]
  constructor() { }
  public getList() {
    this.itemlist=[];
    let keys=Object.keys(localStorage)
    keys.forEach(key => {
      this.itemlist.push((JSON.parse(localStorage.getItem(key))))
    });
    return this.itemlist;
  }
  public addItem(item){
    this.pippo.next(item);
  }
  public getTotal():number{
    let keys=Object.keys(localStorage);
    let sum=0;
    keys.forEach(key => {
      sum=sum+JSON.parse(localStorage.getItem(key)).total;
    });
    return sum;
  }
  public getTotaleNetto(){
    return (this.getTotal()-this.dascontare);
    }
  public removeitem(key){
    localStorage.removeItem(key);
  }
  }


