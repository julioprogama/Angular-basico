import { Component, Input } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {
  
  /* @Input() ListaPersonaje: Personaje[]= []; */
  
  constructor (private dbzService: dbzService ) {
    
  }
  get pesonajes (): Personaje[] {
    return this.dbzService.personaje;
  }
}
