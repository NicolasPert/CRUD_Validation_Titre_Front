import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ChangeProductsComponent } from './components/change-products/change-products.component';
import { EraseProductsComponent } from './components/erase-products/erase-products.component';
import { HomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'page-admin/add-products', component: AddProductsComponent },
  { path: 'page-admin/change-products/:id', component: ChangeProductsComponent },
  { path: 'page-admin/erase-products/:id', component: EraseProductsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
