import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-erase-products',
  templateUrl: './erase-products.component.html',
  styleUrls: ['./erase-products.component.css'],
})
export class EraseProductsComponent {
  produit: Products = {
    id: 1,
    nom: '',
    prix: 1,
    quantity: 1,
    id_categorie: 1,
  };

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const productsIdFromRoute = Number(routeParam.get('id'));

    this.productsService
      .getProductsById(productsIdFromRoute)
      .subscribe((prod) => {
        this.produit = prod;
      });
  }

  deleteProducts(id: number) {
    this.productsService.deleteProducts(id).subscribe((response) => {
      this.router.navigate(['home']);
      // console.log('le produit a bien été supprimé.' + response);
    });
    
    
  }
}
