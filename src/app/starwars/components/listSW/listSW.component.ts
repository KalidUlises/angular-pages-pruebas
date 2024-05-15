import { Component, EventEmitter, Input, Output, output} from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-list-sw',
  templateUrl: './listSW.component.html'
})
export class ListSWComponent {

  @Output()
  public onDeleteCharacter:EventEmitter<String> = new EventEmitter();

  // Este valor que se le da es un valor por defecto, porque realmente esta esperando a que se le pase un valor
  @Input('characterListSW')
  public characterList: Character[] = [
    {
      name: 'Obi Wan',
      power: 97
    }
  ]

  searchCharacter(characterId: String):void{
    console.log(characterId);

    this.onDeleteCharacter.emit(characterId);
  }
 }
