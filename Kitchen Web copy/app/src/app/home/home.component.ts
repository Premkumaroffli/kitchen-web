import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {}
  @Output() ItemData: EventEmitter<any> = new EventEmitter<any>();

  search: string = '';
  path : string = '../../assets/images/';
  productpath : string = '../../assets/products/';

  adDish : boolean = false;
  quantity: number = 0;

  grid1: any = [
    { name: 'All', icon: 'categories.png' },
    { name: 'Breakfast', icon: 'egg.png' },
    { name: 'Soups', icon: 'soup.png' },
    { name: 'Pasta', icon: 'chinese-food.png'},
    { name: 'maincourse', icon: 'curry.png' },
    { name: 'Burger', icon: 'burger-2.png' }
  ];

  grid2 : any =[
    { id : '1', name: 'ClassicBurger', icon: 'burger-1.jpg', price: 10, type : 'veg', dishboll:false, quantity: 0 },
    { id : '2', name: 'Cheeseburger', icon: 'burger-2.jpg', price: 10, type : 'non veg', dishboll:false, quantity: 0 },
    { id : '3', name: 'BaconBurger', icon: 'burger-3.jpg', price: 10, type : 'veg', dishboll:false, quantity: 0  },
    { id : '4', name: 'VeggieBurger', icon: 'burger-4.jpg', price: 10, type : 'non veg', dishboll:false, quantity: 0 },
    { id : '5', name: 'BBQBurger', icon: 'burger-5.jpg', price: 10, type : 'veg', dishboll:false, quantity: 0 },
    { id : '6', name: 'MushroomBurger', icon: 'burger-6.jpg', price: 10, type : 'veg', dishboll:false, quantity: 0 },
    { id : '7', name: 'SouthwestBurger', icon: 'burger-1.jpg', price: 10, type : 'non veg', dishboll:false, quantity: 0 },
    { id : '8', name: 'TeriyakiBurger', icon: 'burger-2.jpg', price: 10, type : 'veg', dishboll:false, quantity: 0  },
    { id : '9', name: 'DoubleBurger', icon: 'burger-3.jpg', price: 10, type : 'veg', dishboll:false, quantity: 0 },
    { id : '10', name: 'SpicyBurger', icon: 'burger-4.jpg', price: 10, type : 'non veg', dishboll:false, quantity: 0 }
  ]

  itemData : any[] =[];

  addDish(item : any)
  {
    item.quantity = 1;

    let count =  this.itemData.filter(x => x.id == item.id).length;

    console.log(count)
    console.log(this.itemData)
    console.log(item)

    if (count == 0) {
        this.itemData.push(item);
        this.ItemData.emit(item);
    }
    else{
      this.itemData.filter(x => x.id == item.id)[0] = item;
      if (item.quantity == 0) {
        this.itemData.filter(x => x.id == item.id).splice(0, 1);
      }

    }
  }

  increment(item : any) {
    if(item.quantity > 0)
    {
      item.quantity++;
    }
  }

  decrement(item : any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

}
