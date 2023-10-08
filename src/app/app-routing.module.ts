import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/item/item.component';
import { SellerComponent } from './components/seller/seller.component';

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
    path: 'c',
    loadChildren: () => import('./components/category/category.module').then(m => m.AppCategoryModule)
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
