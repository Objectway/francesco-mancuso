import { Component, OnInit } from '@angular/core';
import { FilmTrackerService } from '../services/film-tracker.service';
import { Film } from '../models/film';
import { FilmResponse } from '../models/film-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filmName:string;
  filmList: Film[];
  constructor(private filmTrackerService: FilmTrackerService,private router:Router) { }

  ngOnInit() {
    
  }

  searchFilm(){
    this.filmTrackerService.getFilmList(this.filmName).subscribe(
      (response:FilmResponse)=>{
        this.filmList=response.Search;
        console.log(this.filmList)
      }
    )
  }
  
}
