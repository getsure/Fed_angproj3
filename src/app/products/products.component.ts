import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any = []
  productForm!:any
  constructor(private prodSrvc:ProductsService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', []],
      productPrice: ['', []]
    });
   }

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
   this.prodSrvc.getAllProducts().subscribe(res => this.products=res)
  }

  saveProduct(productForm: any) {
    this.prodSrvc.saveProduct(productForm.value).subscribe(data => {
      this.getProducts()
    })
  } 
  //implement from your end
  updateProduct(id:number){ } 
  deleteProduct(id:number){ } 
}

