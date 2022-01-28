import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
