import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  categorie: Categorie[] = [];
  userForm: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prix: new FormControl(''),
    quantity: new FormControl(''),
    categorie: new FormControl(''),
  });

  constructor(
    private productsService: ProductsService,
    private categorieService: CategorieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categorieService.getCategorie().subscribe((cate: Categorie[]) => {
      this.categorie = cate;
      console.log('mes categories', cate);
    });
  }

  onSubmitForm() {
    const productData = {
      nom: this.userForm.value.nom,
      prix: this.userForm.value.prix,
      quantity: this.userForm.value.quantity,
      id_categorie: this.userForm.value.categorie,
    };

    this.productsService.createProducts(productData).subscribe(
      (response) => {
        this.router.navigate(['home'])
        console.log('Produit ajouté avec succès', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du produit", error);
      }
    );
  }
}
