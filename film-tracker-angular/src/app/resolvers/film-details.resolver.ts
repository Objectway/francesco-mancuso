import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmTrackerService } from '../services/film-tracker.service';

@Injectable()
export class filmDetailsResolver implements Resolve<any>{
    constructor(private filmTrackerService:FilmTrackerService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        let filmId= route.params.filmId;
        return this.filmTrackerService.getFilmDetail(filmId);
    }
}