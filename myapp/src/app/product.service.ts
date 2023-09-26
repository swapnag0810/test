import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './productmodel';
import { HttpClient } from '@angular/common/http';
import { RESTAPIService } from './restapi.service';

 @Injectable({providedIn: 'root'})

export class ProductService{

    constructor(private http: HttpClient, private restAPI: RESTAPIService) { }
    public getProducts() {
 
        let products:Product[];
 
        products=[
            new Product(1,'Memory Card test',500),
            new Product(2,'Pen Drive',750),
            new Product(3,'Power Bank',100)
        ];

        alert("hi1");

        this.http.get('http://localhost:5253/api/Products/GetProducts')
        .subscribe(data => {
            // handle the data
        });

        return products;               
    }
 
 
    public getProduct(id:number) {
        let products:Product[]=this.getProducts();
        return products.find(p => p.productID==id);
    }
 
 
}
 