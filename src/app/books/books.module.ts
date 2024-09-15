import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from '../books-list/books-list.component';
import { BookDetailsComponent } from '../book-details/book-details.component';

const routes:Routes = [
  {path:'', component:BooksListComponent},
  {path:':id', component:BookDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
