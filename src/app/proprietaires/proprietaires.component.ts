import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proprietaire } from '../model/proprietaire';
import { AuthService } from '../services/auth.service';
import { ProprietaireService } from '../services/proprietaire.service';

@Component({
  selector: 'app-proprietaires',
  templateUrl: './proprietaires.component.html',
  styleUrls: ['./proprietaires.component.css']
})
export class ProprietairesComponent implements OnInit {
  proprietaires :Proprietaire[];/// un tableau de proprietaire

  constructor(private proprietaireService:  ProprietaireService,private router :Router,public authService: AuthService) { }

  ngOnInit(): void {
    this.proprietaireService.listeProprietaire().subscribe(prods => {
    console.log(prods);
    this.proprietaires = prods;
    });
    }

    supprimerProprietaire(p: Proprietaire)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.proprietaireService.supprimerProprietaire(p.numP).subscribe(() => {
      console.log("proprietaire supprimé");
      this.SuprimerProprietaireDuTableau(p);
      });
      
    }
SuprimerProprietaireDuTableau(prod : Proprietaire) {
      this.proprietaires.forEach((cur, index) => {
      if(prod.numP=== cur.numP) {
      this.proprietaires.splice(index, 1);
      }
      });
      }

}
