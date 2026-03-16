import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food';
import { CartService } from '../../services/cart';

@Component({
selector: 'app-food-menu',
standalone: true,
imports: [CommonModule],
templateUrl: './food-menu.html'
})

export class FoodMenuComponent implements OnInit {

foods:any[]=[]

constructor(
private foodService:FoodService,
private cartService:CartService
){}

ngOnInit(){

this.foodService.getFoods()
.subscribe(data=>{
this.foods=data
})

}

addToCart(food:any){

this.cartService.addToCart(food)

}

}