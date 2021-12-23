import { Proprietaire } from "./proprietaire";

export class Animal {
    numA : number;
    nomA : string;
    couleur : string;
    dateNais : Date ;
    proprietaire: Proprietaire;

public constructor( nomA: string, couleur: string, dateNais: Date, proprietaire: Proprietaire){
    this.nomA=nomA;
    this.couleur=couleur;
    this.dateNais=dateNais;
    this.proprietaire=proprietaire;
    
    
}

    }
    