import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class AnimalService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    addAnimal(token, animal) {
        let params = JSON.stringify(animal);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + '/animal', params, {headers: headers});
    }

    getAnimals() {
        return this._http.get(this.url + 'animals');
    }

    getAnimal(id) {
        return this._http.get(this.url + 'animal/' + id);
    }

    editAnimal(token, id, animal) {
        let params = JSON.stringify(animal);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'animal/' + id, params, {headers: headers});
    }

    deleteAnimal(token, id) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.delete(this.url + 'animal/' + id, {headers: headers});
    }
}