import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookAPIService {
  constructor(private http: HttpClient) { }

  getBookDetails(param: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes/' + param);
  }

  public searchInTitle(param: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes/?q=intitle:' + '"' + param + '"');
  }

  public searchInAuthor(param: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes/?q=inauthor:' + '"' + param + '"');
  }
}
