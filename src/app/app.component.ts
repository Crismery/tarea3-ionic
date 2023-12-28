import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'person' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Traductor', url: '/traductor', icon: 'language' },
    { title: 'Tabla', url: '/tabla', icon: 'tablet-portrait' },
    { title: 'video', url: '/video', icon: 'videocam' }
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
