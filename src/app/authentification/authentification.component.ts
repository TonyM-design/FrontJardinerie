import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  inputUserLogin : string;
  inputUserPassword : string;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

 connectUser(){

  }
  disconnectuser(){

  }
}
