import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
})

export class ParqueComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    @Input() nombre: String;
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }

    //Se ejecuta cada vez que hay un cambio en el componente
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        console.log("Existen cambios en las propiedades")
    }

    //Se ejecuta cuando se carga el componente
    ngOnInit() {
        console.log('Metodo on init lanzado');
    }

    //Se ejecuta cada vez que ocurre un evento, hay algun cambio en angular...
    ngDoCheck() {
        console.log('El DoCheck se ha ejecutado en Parque');
    }

    ngOnDestroy() {
        console.log('Se va a eliminar el componente Parque')
    }

    emitirEvento() {
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }
}