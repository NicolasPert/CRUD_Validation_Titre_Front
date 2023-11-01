import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';


@Component({
  selector: 'app-change-products',
  templateUrl: './change-products.component.html',
  styleUrls: ['./change-products.component.css'],
})
export class ChangeProductsComponent {
  produit: Products = {
    id: 1,
    nom: '',
    prix: 1,
    quantity: 1,
    id_categorie: 1,
  };
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const productsIdFromRoute = Number(routeParam.get('id'));

    this.productsService
      .getProductsById(productsIdFromRoute)
      .subscribe((prod) => {
        this.produit = prod;
      });

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

    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      if (idString !== null) {
        // Vérifiez que 'idString' n'est pas 'null'
        const id = +idString; // Convertissez 'idString' en nombre
        if (!isNaN(id)) {
          // Assurez-vous que 'id' est un nombre valide
          this.productsService.updateProducts(id, productData).subscribe(
            (response) => {
              this.router.navigate(['home']);
              console.log('Produit modifié avec succès', response);
            },
            (error) => {
              console.error('Erreur lors de la modification du produit', error);
            }
          );
        } else {
          console.error("L'ID n'est pas un nombre valide.");
        }
      } else {
        console.error("L'ID est 'null'.");
      }
    });
  }
}
