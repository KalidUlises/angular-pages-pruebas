import { Character } from './../interfaces/character.interface';
import { SwService } from './../services/SW.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starwars-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private swService: SwService){};

  get charactersList(){
    return this.swService.charactersList;
  }

  OnDeleteCharacter(idCharacter: String){
    this.swService.deleteCharacterById(idCharacter);
  }

  addCharacter(character: Character){
    this.swService.addCharacter2List(character);
  }

}
