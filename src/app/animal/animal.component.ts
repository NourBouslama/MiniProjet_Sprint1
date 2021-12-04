import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  //animals : string[]; //un tableau de chînes de caractères
  animals : Animal[]; //un tableau de Produit

 /* constructor() { 
   // this.animals = ["michou", "mimi", "macha"];
   this.animals = [
    {numA : 1, nomA : "oreo", couleur : "blanche", dateNais : new Date("01/14/2011")},
    {numA : 2, nomA : "michou",couleur  : "noir", dateNais : new Date("12/17/2010")},
    {numA : 3, nomA :" macha",  couleur: "multicouleur", dateNais : new Date("02/20/2020")}
     ];
  }*/
  constructor(private animalService: AnimalService,private router :Router ) {
    //this.animals = animalService.listeAnimal();
    }
    
    
    

ngOnInit(): void {
  this.animalService.listeAnimal().subscribe(prods => {
  console.log(prods);
  this.animals = prods;
  });
  }

supprimerAnimal(p: Animal)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.animalService.supprimerAnimal(p.numA).subscribe(() => {
      console.log("animal supprimé");
      this.SuprimerAnimalDuTableau(p);
      });
      
    }
SuprimerAnimalDuTableau(prod : Animal) {
      this.animals.forEach((cur, index) => {
      if(prod.numA=== cur.numA) {
      this.animals.splice(index, 1);
      }
      });
      }

}
