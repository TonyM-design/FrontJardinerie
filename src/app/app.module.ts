import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PlantLibraryComponent } from './plant-library/plant-library.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantLibraryComponent,
    AuthentificationComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
        FormsModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
