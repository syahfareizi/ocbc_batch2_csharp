import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//  products= [
//    {
//      id: "ABC8441189035",
//      name: "Tshirt",
//      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//    },
//    {
//      id: "DEF6510463347",
//      name: "Shoes",
//      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
//    },
//    {
//      id: "GHI0831819467",
//      name: "Handbags",
//      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
//    }
   
//  ]
//   // constructor() { }

//   ngOnInit(): void {
//   }


  products: Product[] =[];
  
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService
    .getProducts()
    .subscribe(products => this.products = products);
  }
}
