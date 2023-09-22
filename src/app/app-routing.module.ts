import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/item/item.component';
import { SellerComponent } from './components/seller/seller.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path: 'user/:id',
    component: SellerComponent
  },
  {
    path: 'c/:category',
    component: CategoryComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
