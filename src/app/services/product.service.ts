import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
      this.products = [
          { id: 'HT-1000', name: 'name 1', price: 100, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1001', name: 'name 2', price: 200, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1111.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1002', name: 'name 3', price: 300, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1020.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1003', name: 'name 4', price: 400, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1041.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1004', name: 'name 5', price: 500, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1118.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1005', name: 'name 6', price: 600, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1117.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1006', name: 'name 7', price: 700, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1119.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1007', name: 'name 8', price: 800, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1036.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          { id: 'HT-1008', name: 'name 9', price: 800, photo: 'https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1037.jpg' ,category:"Electronics",description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',company:"Egypt for Electronics",productionYear:2018 },
          
      
        ];
  }

  findAll(): Product[] {
      return this.products;
  }

  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
              return i;
          }
      }
      return -1;
  }

}
