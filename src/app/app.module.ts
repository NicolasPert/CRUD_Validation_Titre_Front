import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/page-home/page-home.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ChangeProductsComponent } from './components/change-products/change-products.component';
import { EraseProductsComponent } from './components/erase-products/erase-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductsComponent,
    ChangeProductsComponent,
    EraseProductsComponent,
    ConnexionComponent,
    PageAdminComponent,
    ListeProduitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
