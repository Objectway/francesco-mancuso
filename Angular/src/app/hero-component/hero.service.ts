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
          id:1,
          name:"Phoenix"
        },
        {
          id:2,
          name:"Wolverine"
        }
    ]);
    observer.complete();
    })
  }
}
