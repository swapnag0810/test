import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {
  url: string = "http://localhost:5253/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  addUser(user: any) {
    return this.http.post(this.url+"api/User/AddUser", user, this.httpOptions);
  }

  getProducts() {
    return this.http.get(this.url+"api/Products/GetProducts", this.httpOptions);
  }

  addProduct(product: any) {
    return this.http.post(this.url+"addproduct", product, this.httpOptions);
  }

  getHolidays(){
    return this.http.get(this.url+"api/Products/GetHolidays", this.httpOptions);
  }
}