import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero-component/hero';
import { HeroService } from '../hero-component/hero.service';
import {switchMap} from 'rxjs/operators'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero:Hero;

  constructor(private route:ActivatedRoute,private heroService:HeroService) { }

  ngOnInit() {
    let heroId;
    const obs$ = this.route.params.pipe(
        switchMap((param) => {
          console.log(param);
          heroId = param.id;
          return this.heroService.getHeroes();
        }));

      obs$.subscribe((heroList: Hero[]) => {
        console.log(heroId);
        this.hero = heroList.filter((hero) => hero.id == heroId)[0];
        console.log(this.hero);
      });
  } 

}
