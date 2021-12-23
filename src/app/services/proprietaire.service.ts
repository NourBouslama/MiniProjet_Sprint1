import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietaire } from '../model/proprietaire';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  apiURL: string = 'http://localhost:8095/animals/propapi';

proprietaires : Proprietaire[]=[];

  constructor(private http : HttpClient, private authService : AuthService) { }

  listeProprietaire(): Observable<any>{
    let jwt = this.authService.getToken(); 
    jwt = "Bearer "+jwt; 
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Proprietaire[]>(this.apiURL,{headers:httpHeaders});
    }
    
  /*listeAnimals():Animal[] {
    return this.animals;
  }*/
  ajouterProprietaire( prod: Proprietaire):Observable<Proprietaire>{
    let jwt = this.authService.getToken(); 
    jwt = "Bearer "+jwt; 
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Proprietaire>(this.apiURL, prod, {headers:httpHeaders})
    }
    supprimerProprietaire(id : number) {
      const url = `${this.apiURL}/${id}`; 
      let jwt = this.authService.getToken(); 
      jwt = "Bearer "+jwt; 
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.delete(url, {headers:httpHeaders});
      }
    consulterProprietaire(id: number): Observable<Proprietaire> {
      const url = `${this.apiURL}/${id}`; 
      let jwt = this.authService.getToken(); 
      jwt = "Bearer "+jwt; 
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.get<Proprietaire>(url,{headers:httpHeaders});
      }
  
    /*trierProprietaires(){
      this.proprietaires = this.proprietaires.sort((n1,n2) => {
      if (n1.numP > n2.numP) {
      return 1;
      }
      if (n1.numP < n2.numP) {
      return -1;
      }
      return 0;
      });
      }*/
      updateProprietaire(p:Proprietaire)
      {
        let jwt = this.authService.getToken(); 
        jwt = "Bearer "+jwt; 
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.put<Proprietaire>(this.apiURL, p, {headers:httpHeaders});

      }
}
