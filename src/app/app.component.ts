import { Component} from '@angular/core';
import dogData from '../dog.json';

interface Dog {    
   
}  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-frontend-turn2c';
  dog:Dog[] = dogData;
}
