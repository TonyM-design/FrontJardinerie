import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PlantLibraryComponent } from './plant-library/plant-library.component';

const routes: Routes = [
    {path:"auth", component: AuthentificationComponent},
  {path:"planteLibrary", component: PlantLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
