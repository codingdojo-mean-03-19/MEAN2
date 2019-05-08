import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Book } from 'src/app/models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('book_id');

    //   this.bookService.getBook(id).subscribe(book => (this.book = book));
    // });

    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(id => this.bookService.getBook(id))
      )
      .subscribe(book => (this.book = book));
  }
}
