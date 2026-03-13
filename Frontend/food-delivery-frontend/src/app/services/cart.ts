
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class CartService {

cart:any[]=[]

addToCart(item:any){
this.cart.push(item)
}

getCartCount(){
return this.cart.length
}

}