import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { Product } from '../models/product';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {

	private items:Item[] = [];
  private product:Product;
  constructor(private authService: AuthService , 
              private userService: UserService,
              private router: Router ) { }

              
  ngOnInit() {
  }

  getItems(){
    this.items =  JSON.parse(localStorage.getItem('cart'));
    return this.items;
  }
  
}
