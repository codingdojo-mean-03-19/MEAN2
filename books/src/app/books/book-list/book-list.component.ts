import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BOOKS } from '../../data';
import { Book } from '../../models';
import { BookService } from 'src/app/services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = BOOKS;
  selectedBook: Book;
  sub: Subscription;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    console.log('ng on init');
    this.sub = this.bookService.getBooks().subscribe(books => {
      console.log(books);

      this.books = books;
    });
  }

  onSelect(book: Book) {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.books.push(book);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDelete(event: Event, book: Book) {
    event.stopPropagation();

    this.bookService.removeBook(book.id).subscribe(removedBook => {
      console.log('deleting book', removedBook);

      this.books = this.books.filter(b => b.id !== removedBook.id);
    });
  }
}
