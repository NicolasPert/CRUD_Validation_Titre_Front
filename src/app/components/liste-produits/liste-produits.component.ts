import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
// import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css'],
})
export class ListeProduitsComponent {

  @Input() products!: Products[];
  utilisateur: boolean = false;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit() {
    console.log('avant la recup', this.utilisateur);
    this.utilisateurService.getUtilisateur().subscribe((mesUtilisateur) => {
      mesUtilisateur;
  
      console.log('pendant la recup', this.utilisateur);
    });
     if (sessionStorage.getItem("token")) {
      this.utilisateur = true;
      return
     }
     this.utilisateur = false;
  
  }
}
