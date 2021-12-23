import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietaire } from '../model/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';


@Component({
  selector: 'app-update-proprietaire',
  templateUrl: './update-proprietaire.component.html',
  styles: []
})
export class UpdateProprietaireComponent implements OnInit {
  currentProprietaire = new Proprietaire();
  //proprietaires:any;

  constructor(private activatedRoute: ActivatedRoute,
    private proprietaireService: ProprietaireService,
    private router :Router,) { }

  ngOnInit() {
    this.proprietaireService.consulterProprietaire(this.activatedRoute.snapshot.params.id).
 subscribe( prod =>{ this.currentProprietaire = prod; } ) ;
  }
  updateProprietaire()
  { //console.log(this.currentProduit);
    this.proprietaireService.updateProprietaire(this.currentProprietaire).subscribe(prod => {
      this.router.navigate(['proprietaires']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      
  }

}
