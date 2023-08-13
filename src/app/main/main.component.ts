import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  //constructor(private http: HttpClient) {}
  /*async start (x:any) {
    const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1&page=0");
    const data: any = await response.json();
    console.log(data)
  } */
}
