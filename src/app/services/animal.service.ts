import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proprietaire } from '../model/proprietaire';
import { AuthService } from './auth.service';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class AnimalService {
  apiURL: string = 'http://localhost:8095/animals/api';

animals : Animal[]; //un tableau de Produit
proprietaire = new Proprietaire();
animalsRecherche : Animal[]; //un tableau de Produit
proprietaires : Proprietaire[];
//animal : Animal;
constructor(private http : HttpClient, private authService : AuthService) {

}
listeAnimal(): Observable<Animal[]>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<Animal[]>(this.apiURL+"/all",{headers:httpHeaders}
);

  }
  

ajouterAnimal( prod: Animal):Observable<Animal>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Animal>(this.apiURL, prod, {headers:httpHeaders});
  }
  supprimerAnimal(id : number) {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.delete(url,  {headers:httpHeaders});
    }
  

    consulterAnimal(id: number): Observable<Animal> {
      const url = `${this.apiURL}/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.get<Animal>(url,{headers:httpHeaders});
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
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.put<Animal>(this.apiURL, p, {headers:httpHeaders});

      }
     listeProprietaires():Proprietaire[] {
        return this.proprietaires;
      }
      
      /*consulterProprietaire(id:number): Proprietaire{    
        this.proprietaire =  this.proprietaires.find(prop => prop.numP  == id);
          return this.proprietaire;
       }*/
       consulterProprietaire(id: number): Observable<Proprietaire> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Proprietaire>(url);
        }
        
     rechercherParProprietaire(numP: number): Animal[]{
      this.animalsRecherche = [];
     
      this.animals.forEach((cur, index) => {
       if(numP == cur.proprietaire.numP) {
           console.log("cur "+cur);
          this.animalsRecherche.push(cur);
           }
     });
     return this.animalsRecherche;
     }
      
}
