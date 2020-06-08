import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeIn } from '../animation';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        trigger('marcar',  [
            state('inactive', style({
                border: '10px solid #ccc'
            })),
            state('active', style({
                border: '15px solid yellow',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.2'
            })),
            transition('inactive => active', animate('1s linear')),
            transition('active => inactive', animate('1s linear'))
        ]),
        fadeIn
    ]
})

export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque: String;
    public miParque;
    public status;

    constructor() {
        this.titulo = 'Esta es la tienda';
        this.status = 'inactive';
    }

    cambiarEstado(status) {
        if (status == 'inactive'){
            this.status = 'active';
        }
        else
            this.status = 'inactive';
    }

    mostrarNombre() {
        console.log(this.nombreDelParque);
    }

    verDatosParque(event) { 
        this.miParque = event;
    }

    ngOnInit() {
        /*$('#textojq').hide();
        $('#botonjq').click(function(){
            $('#textojq').slideToggle();
        });*/
    }
}