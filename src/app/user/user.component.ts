import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    GamesComponent,

  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users='German'
  isloggedIn= false;

  favGame='';

  getFavorito(Gamename:string){
    this.favGame = Gamename;
  }

  click33(){
    alert('holiii')
  }
}
