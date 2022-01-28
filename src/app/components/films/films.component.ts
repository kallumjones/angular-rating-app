import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Movie[] = [];
  title:string = 'Films';
  singularItem:string = 'Film';

  constructor(private filmService: FilmService) {
    this.filmService.getFilms().subscribe(films => this.films = films);
  }

  ngOnInit(): void {
  }



}
