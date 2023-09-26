export class Product { 
 
    constructor(productID:number,    name: string ,   price:number) {
        this.productID=productID;
        this.name=name;
        this.price=price;
    }
 
    productID:number ;
    name: string ;
    price:number;
 
}

export class User {

    constructor(fullname:string, address: string , dob:string) {
        this.fullname=fullname;
        this.address=address;
        this.dob=dob;
    }

    fullname: string;
    address: string;
    dob: string;
}
 