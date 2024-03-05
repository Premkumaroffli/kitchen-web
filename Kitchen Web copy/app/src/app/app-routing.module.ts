import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { PlaceOrderComponent } from './place_order/place_order.component';

const routes: Routes = [
  {
    path: '',
    component : SideNavComponent
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'place_order',
    component : PlaceOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
