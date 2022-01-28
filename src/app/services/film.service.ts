import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { Movie } from '../Movie'

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:5000/films';

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Movie[]> {
    return this,this.httpClient.get<Movie[]>(this.apiUrl);
  }

}
