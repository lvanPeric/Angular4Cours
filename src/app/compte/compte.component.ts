import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mouvement } from '../models/mouvement';


@Component({
  selector: 'compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  @Input()
  compte:Array<Mouvement>;


  @Output()
  sortie:EventEmitter<String>;

  constructor() { 
    this.sortie = new EventEmitter<String>();

  }

  ngOnInit() {
  }

  oula(chaine){
    this.sortie.emit(chaine);
  }

}
