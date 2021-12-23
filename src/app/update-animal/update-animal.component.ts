import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../model/animal';
import { Proprietaire } from '../model/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
selector: 'app-update-animal',
templateUrl: './update-animal.component.html',
styles: []
})
export class UpdateAnimalComponent implements OnInit {
currentAnimal:Animal;
animalForm:FormGroup;
//proprietaireList:any = [];
proprietaires:any=[];
constructor(private activatedRoute: ActivatedRoute,
  private animalService: AnimalService,
  private router :Router,
  private proprietaireService: ProprietaireService,
  private formBuilder:FormBuilder ) { 
    this.animalForm = this.formBuilder.group({
      id : new FormControl(''),
      name : new FormControl(''),
      coul : new FormControl(''),
      date : new FormControl(''),
      prop : new FormControl('')
    })
  }
  ngOnInit() : void {
    this.onSelectProp();
    console.log("Id:", this.activatedRoute.snapshot.params['id']);
    this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']).subscribe(
      bug => {
        this.currentAnimal = bug;
        console.log(bug);
        this.animalForm.controls['id'].setValue(bug.numA);
        this.animalForm.controls['name'].setValue(bug.nomA);
        this.animalForm.controls['coul'].setValue(bug.couleur);
        this.animalForm.controls['date'].setValue(bug.dateNais);
        this.animalForm.controls['prop'].setValue(bug.proprietaire.nomP);
      },
      (error) => {
        console.log(error);
      } 
    ) ;
  // console.log(this.route.snapshot.params.id);
  //this.proprietaires = this.animalService.listeProprietaire();
  /*this.animalService.consulterAnimal(this.activatedRoute.snapshot.params.id).
   //subscribe( prod =>{ this.currentAnimal = prod,(error)=> { console.log(error)});
   subscribe( prod =>{ this.currentAnimal = prod;

   },(error)=> { console.log(error)});
   this.onSelectUni(this.currentAnimal.numA);*/


  } 
  updateAnimal()
{ //console.log(this.currentProduit);
  this.animalService.updateAnimal(this.currentAnimal).subscribe(prod => {
    this.router.navigate(['animal']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    
}
onSelectUni(id:number){
  this.proprietaireService.listeProprietaire().subscribe(response =>{
    console.log(response)
    this.proprietaires = response;

  });
}
onSelectProp(){
  this.proprietaireService.listeProprietaire().subscribe(response=>{
    console.log(response)
    this.proprietaires = response;
    
  }); 
}

}