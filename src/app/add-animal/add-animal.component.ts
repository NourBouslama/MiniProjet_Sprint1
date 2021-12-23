import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';
import { AnimalService } from '../services/animal.service';
import { ProprietaireService } from '../services/proprietaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietaire } from '../model/proprietaire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animalForm:FormGroup;
  animals:Animal[];
  //newAnimal = new Animal();
  //newProprietaire =  new Proprietaire();
  newProprietaire : Proprietaire;
  message : string;
  //proprietaires : Proprietaire[];
  proprietaires:any=[];
  newNumP : number;

  //AnimalForm:FormGroup;

constructor(private animalService: AnimalService,private proprietaireService: ProprietaireService,private router :Router,private formBuilder:FormBuilder) 
{
  this.animalForm = this.formBuilder.group({

    name : new FormControl(''),
    coul : new FormControl(''),
    date : new FormControl(''),
    prop : new FormControl('')
  })
}

  

  ngOnInit() {

      this.onSelectProp();
    
    
  }
  addAnimal(){
    let newAnimal : Animal  = new Animal(this.animalForm.value.name,this.animalForm.value.coul,this.animalForm.value.date,this.animalForm.value.prop);
    this.animalService.ajouterAnimal(newAnimal).subscribe(voit => {
      console.log(voit);
    });
    this.ngOnInit();
    this.router.navigate(['animal']).then(()=>
    window.location.reload());
 
    }

    onSelectProp(){
      this.proprietaireService.listeProprietaire().subscribe(response=>{
        console.log(response)
        this.proprietaires = response;
        
      }); 
    }
}
