import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../models/film';
import { FilmDetailsComponent } from '../film-details/film-details.component';

@Pipe({
  name: 'filmYear'
})
export class FilmYearPipe implements PipeTransform {

  transform(filmList: Film[], filmYear?: number): Film[] {
    return filmList.filter((film)=> Number(film.Year) >= filmYear)
  }

}
