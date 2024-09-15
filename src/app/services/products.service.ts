import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  mockUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.mockUrl);
  }
  saveProduct(product:any) {
    return this.http.post(this.mockUrl, product);
  }
  deleteProduct(id: number){
    return this.http.delete(this.mockUrl + '/' + id);
  }
  updateProduct(product:any) {
    return this.http.put(this.mockUrl + '/' + product.id, product);
  }

}
