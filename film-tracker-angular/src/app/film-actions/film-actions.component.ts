import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film';
import { FilmTrackerService } from '../services/film-tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-actions',
  templateUrl: './film-actions.component.html',
  styleUrls: ['./film-actions.component.scss']
})
export class FilmActionsComponent implements OnInit {
  @Input() film:Film;
  @Input() invisible:boolean;
  constructor(private filmTrackerService:FilmTrackerService,private router:Router) { }

  ngOnInit() {
  }
  addFilmToWatchedList(){
    console.log();
    this.filmTrackerService.addFilmToWatchedList(this.film);
  }
  addFilmToWishList(film:Film){

  }
  gotoDetails(filmId:string){
    this.router.navigate(['film-details',this.film.imdbID])
  }
}
