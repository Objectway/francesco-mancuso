import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(){
    return new Observable((observer)=> {
      observer.next([
        {
          name:"Phoenix"
        },
        {
          name:"Wolverine"
        }
    ]);
    observer.complete();
    })
  }
}
