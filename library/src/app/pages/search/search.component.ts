import { Component, OnInit } from '@angular/core';
import { GoogleBookAPIService } from 'src/app/services/google-book-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  responses: any;

  constructor(private googleBookAPI: GoogleBookAPIService, private router: Router) { }

  ngOnInit() {
  }

  searchInAuthors(param: string): void {
    this.googleBookAPI.searchInAuthor(param).subscribe(
      response => this.responses = response.items,
      err => console.error(err)
    );
  }

  searchInTitles(param: string): void {
    this.googleBookAPI.searchInTitle(param).subscribe(
      response => this.responses = response.items,
      err => console.error(err)
    );
  }

  openBookDetails(id: string): void {
    this.router.navigate(['/bookDetails/' + id]);
  }

}
