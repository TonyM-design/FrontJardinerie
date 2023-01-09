import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(http : HttpClient) { }

getInfo(){
    this.http.get("http://localhost:8080/siteBootArticleTP/article").subscribe(
      response => {
   sessionStorage.setItem("lst",JSON.stringify(response));
      }
      ,
      err => {
        console.log("*************KO")
        
      }


    );
}

 create(info)
  {
    const body = JSON.stringify(info);

    this.http.post("http://localhost:8080/siteBootArticleTP/article", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

        console.log("crud service post OK");
       
      },

        err => {
          console.log("crud service post KO")
        });


  }
}
