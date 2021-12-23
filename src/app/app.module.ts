import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
//import { FormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProprietaireComponent } from './add-proprietaire/add-proprietaire.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { RechercheParProprietaireComponent } from './recherche-par-proprietaire/recherche-par-proprietaire.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AddAnimalComponent,
    UpdateAnimalComponent,
    AddProprietaireComponent,
    ProprietairesComponent,
    UpdateProprietaireComponent,
    RechercheParProprietaireComponent,
    RechercheParNomComponent,
    LoginComponent,
    ForbiddenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
