import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url:string = "https://fakestoreapi.com/products"
  constructor(private httpClient:HttpClient) { }

  getBook(id:number){
    return this.httpClient.get(this.url+'/'+id)
  }
  getBooks(){
    return this.httpClient.get(this.url)
  }
}
