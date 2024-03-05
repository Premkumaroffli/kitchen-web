import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-place',
  templateUrl: './place_order.component.html',
  styleUrls: ['./place_order.component.scss'],
})
export class PlaceOrderComponent {
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

  
  @Input() ItemData : any[] = [];

  constructor() {
    console.log(this.ItemData);
  }

}
