import { Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {}
  headers:any;
  dogsData:string[] = [];
  oldData:any[] = [];
  pages:number = 1;
  max:number = 1;
  changeDogs():void{
    this.http
			.get<any>('https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1&page=0', {headers: this.headers})
			.subscribe(data => {
        for (let i = 0; i < 8; i++) this.dogsData.push(data[i].url)
        this.oldData.push(this.dogsData)
      });
  }

  nextPage(val:number):void {
    if (this.pages + val >= 1) {
      this.pages += val
      this.dogsData = [];
      if (this.pages > this.max) {
        this.changeDogs();
        this.max = this.pages;
      }
      else this.dogsData= this.oldData[this.pages - 1];
      console.log(this.dogsData)
      console.log(this.pages)
    }
  }
  
  ngOnInit() {
		this.headers = new HttpHeaders({
			'x-dog-host': 'eu',
			'x-dog-key': 'live_nUDZ4ODvJanObUntgE4KHpKJQYHKrk7OgALQonjjYjgfzaFJh0pO9Y5a1jYiI91o'
		});
		this.changeDogs();
	}
}
