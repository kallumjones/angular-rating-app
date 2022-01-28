import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { VideoGameItemComponent } from './components/video-game-item/video-game-item.component';
import { AddButtonComponent } from './components/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoGamesComponent,
    FilmsComponent,
    FilmItemComponent,
    VideoGameItemComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
