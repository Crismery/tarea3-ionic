import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  constructor() { }
  numero: number=0;
  multiplicadores: number[] = [];

  generarTabla() {
    this.multiplicadores = Array.from({ length: 13 }, (_, index) => index + 1);
  }
  ngOnInit() {
  }

}
