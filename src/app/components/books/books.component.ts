import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  title:string = 'Books';
  singularItem:string = 'Book';

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit(): void {
  }


}
