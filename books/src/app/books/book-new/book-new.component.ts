import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    // this.books.push(form.value);

    this.createBook.emit(form.value);

    this.book = new Book();
    form.reset();
  }
}
