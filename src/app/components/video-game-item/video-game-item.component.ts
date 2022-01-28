import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { VideoGame } from 'src/app/VideoGame';

@Component({
  selector: 'app-video-game-item',
  templateUrl: './video-game-item.component.html',
  styleUrls: ['./video-game-item.component.css']
})
export class VideoGameItemComponent implements OnInit {

  @Input() videoGame!:VideoGame;

  constructor() { }

  ngOnInit(): void {
  }


}
