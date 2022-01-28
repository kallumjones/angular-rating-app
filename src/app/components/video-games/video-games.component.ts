import { Component, OnInit } from '@angular/core';
import { VideoGame } from 'src/app/VideoGame';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {
  title:string = 'Video Games';
  singularItem:string = 'Video Game';
  videoGames: VideoGame[] = [];

  constructor(private videoGameService: VideoGameService) {
    this.videoGameService.getVideoGames().subscribe(games => this.videoGames = games);
  }

  ngOnInit(): void {
  }

}
