import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { HttpClient } from '@angular/common/http';
import { FilmResponse } from '../models/film-response';

@Injectable({
  providedIn: 'root'
})
export class FilmTrackerService {
  private WATCHED_LIST= 'watchedList';
  private WISH_LIST= 'wishList'

  constructor(private httpClient:HttpClient) { }

  getFilmList(filmName: string):Observable<FilmResponse> {
    return this.httpClient.get<FilmResponse>(`http://www.omdbapi.com/?apikey=51fb3d47&s=${filmName}`)
  }
  getFilmDetail(filmId: string):Observable<Film> {
    return this.httpClient.get<Film>(`http://www.omdbapi.com/?apikey=51fb3d47&i=${filmId}`)
  }
  addFilmToWatchedList(film:Film){
    this.addToList(this.WATCHED_LIST,film)
  }
  addFilmToWishList(film:Film){
    this.addToList(this.WISH_LIST,film)
  }
  private addToList(list:string,film:Film){
    let filmList=[];
    const watchedList= localStorage.getItem(list);
    if(!!watchedList){
      filmList=JSON.parse(watchedList)
    }
    filmList.push(film)
    localStorage.setItem(list,JSON.stringify(filmList));
    console.log(filmList)
  }
}
