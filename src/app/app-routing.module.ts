import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';

const routes: Routes = [
  // {path: 'video',redirectTo "" component: VideoGamesComponent}, defa

  {path: '', component: VideoGamesComponent},
  {path: 'films', component: FilmsComponent},
  // {path: '*', component: NotFoundComponent} (not found page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
