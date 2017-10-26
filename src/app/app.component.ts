import { Component } from '@angular/core';
import { Mouvement } from './models/mouvement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  compteParent:Array<Mouvement>=[
    new Mouvement('Materiel', 34.45, new Date()),
    new Mouvement('Materiel', -34.45, new Date()),
    new Mouvement('Materiel', 34.45, new Date()),
    new Mouvement('Materiel', -300, new Date()),
    new Mouvement('Materiel', 34.45, new Date()),
    new Mouvement('Materiel', 34.45, new Date())
  ];
  hello:string = 'hello';


  recuperationEvent(event){
    alert(event);
  }
}
