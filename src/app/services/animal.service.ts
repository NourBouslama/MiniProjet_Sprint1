import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class AnimalService {
  apiURL: string = 'http://localhost:8095/animals/api/';

animals : Animal[]; //un tableau de Produit
//animal : Animal;
constructor(private http : HttpClient) {
/*this.animals = [
  {numA : 1, nomA : "oreo", couleur : "blanche", dateNais : new Date("01/14/2011")},
  {numA : 2, nomA : "michou",couleur  : "noir", dateNais : new Date("12/17/2010")},
  {numA : 3, nomA :" macha",  couleur: "multicouleur", dateNais : new Date("02/20/2020")}

];*/
}
listeAnimal(): Observable<Animal[]>{
  return this.http.get<Animal[]>(this.apiURL);
  }
  
/*listeAnimals():Animal[] {
  return this.animals;
}*/
ajouterAnimal( prod: Animal):Observable<Animal>{
  return this.http.post<Animal>(this.apiURL, prod, httpOptions);
  }
  supprimerAnimal(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
  
/*ajouterAnimal( prod: Animal){
this.animals.push(prod);
}
supprimerAnimal( prod: Animal){
  //supprimer le produit prod du tableau produits
  const index = this.animals.indexOf(prod, 0);
  if (index > -1) {
  this.animals.splice(index, 1);
  }*/
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
 // }
  /*consulterAnimal(id:number): Animal{
    this.animal = this.animals.find(p => p.numA == id);
    return this.animal;
    }*/
    consulterAnimal(id: number): Observable<Animal> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Animal>(url);
      }
  
    trierAnimals(){
      this.animals = this.animals.sort((n1,n2) => {
      if (n1.numA > n2.numA) {
      return 1;
      }
      if (n1.numA < n2.numA) {
      return -1;
      }
      return 0;
      });
      }
      updateAnimal(p:Animal)
      {
      // console.log(p);
      return this.http.put<Animal>(this.apiURL, p, httpOptions);

      }
    
}
