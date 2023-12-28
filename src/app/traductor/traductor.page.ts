import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  constructor() { }
  numero: number=0;
  resultado: string="";

  traducir() {
    // Números del 1 al 20
    const unidades = [
      'Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve',
      'Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve', 'Veinte'
    ];

    // Nombres de las decenas
    const decenas = ['', '', 'Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa'];
    const centenas = ['Cero','Ciento', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos','Mil'];

    if (this.numero < 0 || this.numero > 1000) {
      this.resultado = 'Número fuera de rango';
    } else if (this.numero <= 20) {
      this.resultado = unidades[this.numero];
    } else if (this.numero < 100) {
      const unidad = this.numero % 10;
      const decena = Math.floor(this.numero / 10);
      this.resultado = decenas[decena];
      if (unidad !== 0) {
        this.resultado += ` y ${unidades[unidad]}`;
      }
    } else if (this.numero <= 1000) {
      if (this.numero === 100) {
        this.resultado = 'Cien';
      } else if (this.numero < 200) {
        const unidad = this.numero % 100;
        this.resultado = centenas[1];
        if (unidad !== 0) {
          this.resultado += ` ${unidades[unidad]}`;
        }
      } else {
        const unidad = this.numero % 10;
        const decena = Math.floor((this.numero % 100) / 10);
        const centena = Math.floor(this.numero / 100);
        this.resultado = centenas[centena];
        if (decena !== 0) {
          this.resultado += ` ${decenas[decena]}`;
        }
        if (unidad !== 0) {
          this.resultado += ` y ${unidades[unidad]}`;
        }
      }
  }
  
  }
  ngOnInit() {
  }

}
