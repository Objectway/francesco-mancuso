import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { FilmTrackerService } from '../services/film-tracker.service';
import { Film } from '../models/film';
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  filmDetails: Film;

  constructor(private router:ActivatedRoute,private filmTrackerService:FilmTrackerService,private routern:Router) { }

  ngOnInit() {
    // let filmId;
    // this.router.params.pipe(
    //   switchMap((params)=>{
    //   console.log('film details',params)
    //   filmId=params.filmId;
    //   return this.filmTrackerService.getFilmDetail(filmId);
    // })
    // ).subscribe((filmDetails:Film)=>{
    //   console.log('film details',filmDetails);
    //     this.filmDetails=filmDetails;
      
    // })

    this.router.data.subscribe((data:any)=>{
      console.log('film details', data.filmDetails);
      this.filmDetails=data.filmDetails;
    })
  }
  goback(){
    this.routern.navigateByUrl('/')
  }

}
