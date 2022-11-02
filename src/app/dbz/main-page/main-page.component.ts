import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
/* Servi */
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  
  constructor(private dbzService : dbzService){}
  
  nuevo: Personaje = {
    nombre: 'krilin',
    poder: 100
  }

  
}
