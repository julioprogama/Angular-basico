import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class dbzService{
    
    private _personaje: Personaje[]= [
        {nombre:'Kamisama'  , poder:800000},
        {nombre:'Mr Popo'   , poder:80000},
        {nombre:'Roshi'     , poder:90000}
    ]

    get personaje(): Personaje [] {
        return [...this._personaje];
    }

    constructor(){ }

    agregarPersonaje(personaje: Personaje){
        this._personaje.push(personaje);
    }
}