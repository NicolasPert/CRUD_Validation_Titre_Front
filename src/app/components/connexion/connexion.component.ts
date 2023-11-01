import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginUtilisateur } from 'src/app/models/loginUtilisateur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  userForm: FormGroup = new FormGroup({
    nom: new FormControl(''),
    password: new FormControl(''),
  });
  isFormValidate = false;
  connexionKO = false;

  constructor(private utilisateurService: UtilisateurService) {}

  onSubmitForm() {
    this.isFormValidate = true;

    if (this.userForm.value) {
      this.utilisateurService
        .connexionUtilisateur(this.userForm.value)
        .subscribe({
          next: (response) => {
            sessionStorage.setItem('token', response.accessToken);
            location.reload(); //recharge la page actuelle
          },
          error: (error) => {
            this.connexionKO = true;
          },
        });
    }
  }

  deconnexion() {
    sessionStorage.clear();
    location.reload();
  }
}
