import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';
import { AnimalService } from '../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietaireService } from '../services/proprietaire.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  //animals : string[]; //un tableau de chînes de caractères
  animals : Animal[]; //un tableau d'animal


  constructor(private animalService: AnimalService,private proprietaireService: ProprietaireService,private router :Router,public authService: AuthService ) {

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
