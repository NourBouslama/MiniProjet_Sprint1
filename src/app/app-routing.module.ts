import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { AddProprietaireComponent } from './add-proprietaire/add-proprietaire.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { RechercheParProprietaireComponent } from './recherche-par-proprietaire/recherche-par-proprietaire.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AnimalGuard } from './animal.guard';
import { ProprietaireGuard } from './proprietaire.guard';
//import { AnimalGuard } from './animal.guard';
//import { ProprietaireGuard } from './proprietaire.guard';

const routes: Routes = [

  {path: "animal", component : AnimalComponent},
  {path: "add-animal", component : AddAnimalComponent, canActivate:[AnimalGuard]},
  {path: "", redirectTo: "animal", pathMatch: "full" },
  {path: "updateAnimal/:id", component: UpdateAnimalComponent},
  {path: "proprietaires", component : ProprietairesComponent},
  {path: "add-proprietaire", component : AddProprietaireComponent, canActivate:[ProprietaireGuard]},
  {path: "updateProprietaire/:id", component: UpdateProprietaireComponent},
  {path: "rechercheParProprietaire", component : RechercheParProprietaireComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
