import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit  {
  books!:any
  constructor(private booksSrvc:BooksService){}
   ngOnInit(){
     this.booksSrvc.getBooks().subscribe(res => this.books = res)
  }
}
