import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  private url = 'https://api.jikan.moe/v4/anime?q=naruto&sfw';

  constructor(private httpClient: HttpClient) { }

  getLink(){
    return this.httpClient.get(this.url);
  }

}
