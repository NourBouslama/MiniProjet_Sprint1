import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';

const routes: Routes = [

  {path: "animal", component : AnimalComponent},
  {path: "add-animal", component : AddAnimalComponent},
  {path: "", redirectTo: "animal", pathMatch: "full" },
  {path: "updateAnimal/:id", component: UpdateAnimalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
