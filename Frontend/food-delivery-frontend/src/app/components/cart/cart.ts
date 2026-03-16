import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart';

@Component({
selector:'app-cart',
standalone:true,
imports:[CommonModule,HttpClientModule],
templateUrl:'./cart.html'
})

export class CartComponent{

cart:any[]=[]
total=0

constructor(private cartService:CartService, private http:HttpClient){

this.cart=this.cartService.cart
this.calculateTotal()

}

calculateTotal(){

this.total=0

this.cart.forEach(item=>{
this.total+=item.price
})

}

placeOrder(){

let order={

customerId:1,
totalAmount:this.total,
items:this.cart

}

this.http.post("https://localhost:44378/api/Order",order)
.subscribe(res=>{

alert("Order Placed Successfully")

})

}

}