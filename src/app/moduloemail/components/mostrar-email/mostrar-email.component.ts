import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
      <div *ngIf="emailContacto">
          <h4>{{title}}</h4>
          <strong>Email de contacto: </strong>{{emailContacto}}
          <button (click)="borrarEmail()">Eliminar email de contact</button>
      </div>
  `
})

export class MostrarEmailComponent implements DoCheck {
  title = 'Show email';
  emailContacto: string;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}