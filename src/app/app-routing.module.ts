import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { FilmsComponent } from './components/films/films.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';

const routes: Routes = [
  // {path: 'video',redirectTo "" component: VideoGamesComponent}, defa

  {path: '', redirectTo: 'games', pathMatch: 'full'},
  {path: 'games', component: VideoGamesComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'books', component: BooksComponent},
  {path: '**', component: NotFoundComponent} //(not found page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
