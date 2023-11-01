import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class HomeComponent {
  
  productsToDisplay: Products[]= [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.productsToDisplay = products;
      console.log(this.productsToDisplay);
    });
  }

}
