import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  constructor(private router: ActivatedRoute ,private productService:ProductService) { }

  public productId:string;
  public selectedProduct:Product;
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.productId = params.get("id");
    })
    this.selectedProduct = this.productService.find(this.productId);
  }

}
