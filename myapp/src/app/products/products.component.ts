import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Product } from '../productmodel';
import { RESTAPIService } from '../restapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
   
  constructor(private productService:ProductService, private http: HttpClient,
     private restAPI: RESTAPIService){
  }

  ngOnInit() {
    let products:Product[];
    this.restAPI.getProducts().subscribe((data: any) => {
      this.products = data;
    });
    //this.products=this.productService.getProducts();

    // this.products=[
    //     new Product(1,'Memory Card',500),
    //     new Product(2,'Pen Drive',750),
    //     new Product(3,'Power Bank',100)
    // ];
    
  }

  postProductData() {
    this.http.get('http://localhost:7000/addproduct')
      .subscribe(
        data => {
          // handle the data
        },
        error => {
          // handle the error
        }
      );
  }
}


