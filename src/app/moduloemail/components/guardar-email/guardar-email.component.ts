import { Component } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
      <h4>{{title}}<h4>
      <input type="text" [(ngModel)]="emailContacto" />
      <button (click)="guardarEmail()"> Save Email </button>
  `
})

export class GuardarEmailComponent {
  title = 'Save email';
  emailContacto: string;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }

}