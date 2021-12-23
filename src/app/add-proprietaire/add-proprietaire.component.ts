import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proprietaire } from '../model/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';

@Component({
  selector: 'app-add-proprietaire',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.css']
})
export class AddProprietaireComponent implements OnInit {

  newProprietaire = new Proprietaire();
  message : string;
  constructor(private proprietaireService: ProprietaireService,private router :Router) { }

  ngOnInit() {
  }
  addProprietaire(){
    this.proprietaireService.ajouterProprietaire(this.newProprietaire)
    .subscribe(prod => {
    console.log(prod);
    
    });
    this.router.navigate(['proprietaires']);
    }

}
