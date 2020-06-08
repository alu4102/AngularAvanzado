import { Component } from '@angular/core';

@Component({

    selector: 'empleados',
    templateUrl: './empleados.component.html',
})

export class EmpleadosComponent {
    public titulo: String;
    
    constructor() {
        this.titulo = 'El empleado del mes';
    }
}