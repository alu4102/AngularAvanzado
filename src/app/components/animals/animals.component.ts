import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  providers: [AnimalService],
  animations: [fadeIn]
})

export class AnimalsComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public url: string;

  constructor(private _animalService: AnimalService) {
      this.title = 'Animals';
      this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('animals.component loaded');
    this.getAnimals();
  }

  getAnimals() {
    this._animalService.getAnimals().subscribe(
      (response: any) => {
        if (!response.animals) {

        }
        else {
          this.animals = response.animals;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
