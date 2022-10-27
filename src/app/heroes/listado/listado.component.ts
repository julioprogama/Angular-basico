import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  titulo: string = 'Listado de heroes'
  tituloBorrado: string = 'Heroes borrados';
  
  heroes: string[] = ['Spiderman', 'IronMan','Thor', 'Hulk', 'Wanda', 'Capitan america'];
  heroesBorrados: string []  = [];
  heroeBorrado:string = '';

  Visiblidad: boolean = false;
  
  borrarHeroe( indice: number): void{
    this.heroesBorrados.unshift( this.heroes.splice(indice,1).toString() );
    this.Visiblidad = true;
  }

  borrarLista():void{
    if (this.heroes.length >0){
      this.heroeBorrado = this.heroes.shift() || '';
      this.heroesBorrados.unshift(this.heroeBorrado);
      this.Visiblidad = true;
    }
  }
}
