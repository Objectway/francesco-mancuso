import { Component, OnInit, Input,AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss']
})
export class HeroComponentComponent implements OnInit{
  @Input() heroName:string;
  @Output() customEvent: EventEmitter<string> = new EventEmitter();
  @Input() enableParagraph:boolean;

  constructor(private heroService: HeroService,private router:Router) { }

  private heroesList:Hero[];
  kickHero(){
    console.log("Kicked hero child");
    this.customEvent.emit(`i have kicked ${this.heroName}`)
  }
  goToHeroDetail(heroId){
    this.router.navigate(['/heroes/hero',heroId])
  }

//  ngOnChanges(changes: SimpleChanges): void {
//    console.log('On changes', changes);
//  }

 ngOnInit() {
   this.heroService.getHeroes().subscribe((response: Hero[])=>{
     console.log("Response", response);
     this.heroesList = response;
   })
 }
  
//  ngAfterContentChecked(): void {
//    console.log('On ngAfterContentChecked');
//  }
//  ngAfterContentInit(): void {
//    console.log('On ngAfterContentInit');
//  }
//  ngAfterViewChecked(): void {
//    console.log('On ngAfterViewChecked');
//  }
//  ngAfterViewInit(): void {
//    console.log('On ngAfterViewInit');
//  }
//  ngDoCheck(): void {
//    console.log('On ngDoCheck');
//  }
//  ngOnDestroy(): void {
//  }
}
