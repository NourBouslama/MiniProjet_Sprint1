import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  newAnimal = new Animal();
  message : string;



constructor(private animalService: AnimalService,private router :Router) {}

  

  ngOnInit() {
  }
  addAnimal(){
    this.animalService.ajouterAnimal(this.newAnimal)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['animals']);
    }
  /*addAnimal(){
   // console.log(this.newAnimal);
   this.animalService.ajouterAnimal(this.newAnimal);
   this.message="animal "+this.newAnimal.nomA+" ajouté avec succée"
    }*/

}
