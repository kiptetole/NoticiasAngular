import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  todos = null;

  constructor(public http:HttpClient, ) {
    this.http.get('https://newsapi.org/v2/top-headlines?country=mx&apiKey=60f29093cba54af1b105893ffc8ece6b').subscribe(
      datos => this.todos = datos["articles"]);
  }
}
