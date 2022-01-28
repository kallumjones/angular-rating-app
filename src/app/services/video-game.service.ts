import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { VideoGame } from '../VideoGame';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  private apiUrl = 'http://localhost:5000/video-games';

  constructor(private httpClient: HttpClient) { }

  getVideoGames(): Observable<VideoGame[]> {
    return this.httpClient.get<VideoGame[]>(this.apiUrl);
  }
}
