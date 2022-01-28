import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private urlApi:string = 'http://localhost:5000/books';

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get<Book[]>(this.urlApi)
  }
}
