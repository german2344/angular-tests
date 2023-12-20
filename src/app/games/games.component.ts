import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>los juegos faboritos de {{users}}</h3>
 <ul>
  @for (game of games; track game.id) {
    <li (click)="fav(game.name)">{{game.name}},{{game.id}}</li>
  }
 </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() users='';
  @Output() addFavoritois= new EventEmitter<string>()
  fav(Gamename :string){
    this.addFavoritois.emit(Gamename)
  }
 games =[
  {
    id:1,
  name: 'German',
  },
  {
    id:2,
    name:'andres',
  },
  {
    id:3,
    name:'Katalina',
  }
  
 ]
}
