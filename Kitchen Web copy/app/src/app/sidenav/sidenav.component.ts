import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent {
  search: string = '';
  path : string = '../../assets/images/';
  productpath : string = '../../assets/products/';

  navdata : any = 'menu';
  quantity: number = 0;
  ItemData : any[]= [];

  grid1: any = [
    { name: 'All', icon: 'categories.png' },
    { name: 'Breakfast', icon: 'egg.png' },
    { name: 'Soups', icon: 'soup.png' },
    { name: 'Pasta', icon: 'chinese-food.png'},
    { name: 'maincourse', icon: 'curry.png' },
    { name: 'Burger', icon: 'burger-2.png' }
  ];

  grid2 : any =[
    { name: 'ClassicBurger', icon: 'burger-1.jpg', price: '$10', type : 'veg', dishboll:false, quantity: 0 },
    { name: 'Cheeseburger', icon: 'burger-2.jpg', price: '$10', type : 'non veg', dishboll:false, quantity: 0 },
    { name: 'BaconBurger', icon: 'burger-3.jpg', price: '$10', type : 'veg', dishboll:false, quantity: 0  },
    { name: 'VeggieBurger', icon: 'burger-4.jpg', price: '$10', type : 'non veg', dishboll:false, quantity: 0 },
    { name: 'BBQBurger', icon: 'burger-5.jpg', price: '$10', type : 'veg', dishboll:false, quantity: 0 },
    { name: 'MushroomBurger', icon: 'burger-6.jpg', price: '$10', type : 'veg', dishboll:false, quantity: 0 },
    { name: 'SouthwestBurger', icon: 'burger-1.jpg', price: '$10', type : 'non veg', dishboll:false, quantity: 0 },
    { name: 'TeriyakiBurger', icon: 'burger-2.jpg', price: '$10', type : 'veg', dishboll:false, quantity: 0  },
    { name: 'DoubleBurger', icon: 'burger-3.jpg', price: '$10', type : 'veg', dishboll:false, quantity: 0 },
    { name: 'SpicyBurger', icon: 'burger-4.jpg', price: '$10', type : 'non veg', dishboll:false, quantity: 0 }
  ]

  constructor() {}

  navSetup(type : any)
  {
    this.navdata = type;
  }

  getItemData(ItemData : any)
  {
    this.ItemData.push(ItemData);
    console.log(this.ItemData);
  }

}
