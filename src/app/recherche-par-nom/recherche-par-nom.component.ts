import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {
  animals: Animal[];
  constructor(private animalService: AnimalService) { }

  ngOnInit() : void {
  

     this.animalService.listeAnimal().subscribe(anim=>{
     console.log(anim);
     this.animals=anim;
          
        });
  }
   
  public searchAnimal(key: string): void {
    const resultat: Animal[] = [];
    for (const v of this.animals) {
      if (v.nomA.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1)
        resultat.push(v);
      }
    this.animals = resultat;
   
  }
}
