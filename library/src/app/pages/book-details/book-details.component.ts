import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBookAPIService } from 'src/app/services/google-book-api.service';
import { timeout } from 'q';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: string;
  bookDetails;
  constructor(private route: ActivatedRoute, private googleBookAPI: GoogleBookAPIService) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.googleBookAPI.getBookDetails(this.bookId).subscribe(
      response => this.bookDetails = response,
      err => console.error(err)
    );
  }

}
