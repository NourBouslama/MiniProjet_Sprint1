import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';
import { Proprietaire } from '../model/proprietaire';
import { AnimalService } from '../services/animal.service';
import { ProprietaireService } from '../services/proprietaire.service';

@Component({
  selector: 'app-recherche-par-proprietaire',
  templateUrl: './recherche-par-proprietaire.component.html',
  styles: []
})
export class RechercheParProprietaireComponent implements OnInit {
animals: Animal[];
//NumP : number;
proprietaires:any=[];
numP:number;
animalRecherche: Animal[];
  constructor(private animalService: AnimalService,private proprietaireService: ProprietaireService ) { }

  ngOnInit() : void{
    this.onSelectProp();
    this.animalService.listeAnimal().subscribe(anim=>{
      console.log(anim);
      this.animals=anim;
      
    });
  }
  onSelectProp(){
    this.proprietaireService.listeProprietaire().subscribe(response=>{
      console.log(response)
      this.proprietaires = response;
      
    }); 
  }
  onChange() {
    console.log(this.numP);
     this.animals=this.rechercherParProprietaire(this.numP);
     //console.log(this.animals);
     
     }


    rechercherParProprietaire(numP: number): Animal[]{ 
      this.animalRecherche = []; 
      this.animals.forEach((cur, index) => { 
        if(numP == cur.proprietaire.numP) { 
          console.log("cur "+cur); 
          this.animalRecherche.push(cur); 
        } }); 
        return this.animalRecherche; 
        
      }

}
