import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	private products: Product[];
	private wishListCount : number = 0;


	constructor(
		private productService: ProductService,
		private router: Router, 
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}

	renderSingleProduct(id:string){
		this.router.navigateByUrl('/singleproduct/'+id);
	}

}
