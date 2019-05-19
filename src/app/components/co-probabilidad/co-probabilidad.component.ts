import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-co-probabilidad',
  templateUrl: './co-probabilidad.component.html',
  styleUrls: ['./co-probabilidad.component.css']
})
export class CoProbabilidadComponent implements OnInit {

  stateCoPro: number[] = [];
  eventsCoPRo: number[] = [];
  ntimes: number[] = [];
  nProbabilities: number = 1;
  @Input() valor:number;
  visibleCoPro = false;

  constructor() { 
  }

  numberEvents(n): any[] {
    this.ntimes = [];
    for (let i = 0; i < n; i++)this.ntimes.push(n);
    return this.ntimes;
  }

  changeVisibility(visibleCoPro){
    this.visibleCoPro = visibleCoPro;
  }

  addEvent() {
    return false;
  }

  ngOnInit() {
  }

}
