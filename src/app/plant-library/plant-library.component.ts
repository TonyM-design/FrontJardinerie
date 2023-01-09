import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plante } from '../plante';
import { PlanteServiceService } from '../services/plante-service.service';

@Component({
  selector: 'app-plant-library',
  templateUrl: './plant-library.component.html',
  styleUrls: ['./plant-library.component.css']
})
export class PlantLibraryComponent implements OnInit {
  public planteListe : any;

 public plantes : Array<Plante>;
  public editPlante: Plante;
  public deletePlante: Plante;

    p1 : Plante = {nom :"COURGETTE", exposition :"mi-ombre",categorie :"terre de bruyere", prix :7, tailleMax:55,feuillage:"caduc",cycleVie:"annuelle",floraison :"avril", resistanceFroid :1,description:"Une magnifique COURGETTE",urlImage:"urlIMAGE A REMPLIR",id:3}

  constructor(private planteService : PlanteServiceService) { }

 ngOnInit() {
this.planteListe= [this.p1]
console.log(this.planteListe)
this.displayPlanteCardExpositionicon()
  //this.getPlantes();
  
  }
  
   @ViewChild("planteExposition") myNameElem: ElementRef;
  getValue() {
    console.log(this.myNameElem);
    this.myNameElem.nativeElement.classList.add('bi') ;
    this.myNameElem.nativeElement.classList.add('bi-cloud-sun') ;
    this.myNameElem.nativeElement.classList.add('bi') ;
  }
  displayPlanteCardExpositionicon() {
    this.planteListe.forEach(plante => {
     for (const property in plante) {
      if(property === "exposition" && plante[property] ==="mi-ombre" ) {
const app = document.getElementById("planteExposition");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app?.appendChild(p);
      }
     /*
     <i class="bi bi-cloud-sun"></i>*/
  //console.log(`${property}: ${plante[property]}`);
 // if (`${property}: ${plante[property]}` )
}
      
    });
  }


  public getPlantes(): void {
    this.planteService.getPlantes().subscribe(
      (response: Plante[]) => {
        this.plantes = response;
        console.log(this.plantes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPlante(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.planteService.addPlante(addForm.value).subscribe(
      (response: Plante) => {
        console.log(response);
        this.getPlantes();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePlante(plante: Plante): void {
    this.planteService.updatePlante(plante).subscribe(
      (response: Plante) => {
        console.log(response);
        this.getPlantes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePlante(planteId: number): void {
    this.planteService.deletePlante(planteId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPlantes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 public searchPlantes(key: string): void {
    console.log(key);
    const results: Plante[] = [];
    for (const plante of this.plantes) {
      if (plante.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || plante.cycleVie.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || plante.categorie.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(plante);
      }
    }
    this.plantes = results;
    if (results.length === 0 || !key) {
      this.getPlantes();
    }
  }

  public onOpenModal(plante: Plante, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPlanteModal');
    }
    if (mode === 'edit') {
      this.editPlante = plante;
      button.setAttribute('data-target', '#updatePlanteModal');
    }
    if (mode === 'delete') {
      this.deletePlante = plante;
      button.setAttribute('data-target', '#deletePlanteModal');
    }
    container.appendChild(button);
    button.click();
  }



}
