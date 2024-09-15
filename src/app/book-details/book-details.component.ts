import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  id!:number
  book!:any
 constructor(private activatedRoute:ActivatedRoute, private booksSrvc:BooksService){}
 ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['id']
  this.booksSrvc.getBook(this.id).subscribe(res => this.book = res)
 }
}
