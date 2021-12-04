import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../model/animal.model';
@Component({
selector: 'app-update-animal',
templateUrl: './update-animal.component.html',
styles: []
})
export class UpdateAnimalComponent implements OnInit {
currentAnimal = new Animal();
constructor(private activatedRoute: ActivatedRoute,
  private animalService: AnimalService,
  private router :Router,

  
  ) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.animalService.consulterAnimal(this.activatedRoute.snapshot.params.id).
 subscribe( prod =>{ this.currentAnimal = prod; } ) ;

  } 
  updateAnimal()
{ //console.log(this.currentProduit);
  this.animalService.updateAnimal(this.currentAnimal).subscribe(prod => {
    this.router.navigate(['animals']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    
}


}