//import { Component, OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
// * export class ProductDetailComponent implements OnInit {
export class ProductDetailComponent {
  product_id: string="";
  product :Product = {} as Product

  constructor(private actRoute: ActivatedRoute,
    private productService:ProductService) 
  {
    this.product_id = this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails(){
    this.productService.getProducts().subscribe(products => this.product = products.find(
      product => product.id == this.product_id)!
      )
  }

}