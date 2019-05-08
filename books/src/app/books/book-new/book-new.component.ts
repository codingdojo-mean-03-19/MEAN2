import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BookService } from '../../services';
import { Book } from '../../models';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    // this.books.push(form.value);

    // this.createBook.emit(form.value);
    this.bookService.createBook(this.book).subscribe(newBook => {
      console.log(newBook);

      this.router.navigateByUrl('books');
    });

    this.book = new Book();
    form.reset();
  }
}
