import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public count:number=0;
  public convertedcount:number=this.count;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  Aggiorna(data:any){
    this.count=data.detail;
    this.convertedcount=this.count;
    console.log(data.detail)
  }
  Converti(data:any){
    console.log(data.detail)
    if(data.detail=="Dollaro"){
      this.convertedcount=parseFloat((1.12*this.count).toFixed(3));
    }
    else if(data.detail=="CanadianDollar"){
    this.convertedcount=parseFloat((1.51*this.count).toFixed(3));
    }
    else if(data.detail=="BritishPound"){
      this.convertedcount=parseFloat((0.88*this.count).toFixed(3));
    }
    else if(data.detail=="Euro"){
      this.convertedcount=this.count
    }
  }
  naviga(){
    this.router.navigateByUrl('rotta1')
  }
}
