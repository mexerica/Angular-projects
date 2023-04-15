import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  photoCover:string = "";
  cardTitle:string = "";
  cardDescription:string = "";
  private id:string | null = "0";

  constructor(private route:ActivatedRoute){}
  ngOnInit():void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.cardTitle = result.title
    this.photoCover = result.photoCover
    this.cardDescription = result.description
  }
}
