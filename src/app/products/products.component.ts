import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


	private products: Product[];



	constructor(
		private productService: ProductService,
		private router: Router,
		private userService:UserService,
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}

	renderSingleProduct(id:string){
		this.router.navigateByUrl('/singleproduct/'+id);
	}
	addToCart(id:string){
		this.router.navigateByUrl('/cart/'+id);
	}
	updateWishListCounter(){
		let loggedInUserId = this.userService.getLoggedInUserId();
		let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
		let matchedUser = users.find( 
		user => (user.id === loggedInUserId)
		);
		let index = users.indexOf(matchedUser);
		users[index].wishListCounter = users[index].wishListCounter + 1;
		localStorage.setItem('users', JSON.stringify(users));
	}

}
