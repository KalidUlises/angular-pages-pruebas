import { PropertyWrite } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character-sw',
  templateUrl: './character-sw.component.html',
  styleUrl: './character-sw.component.css'
})
export class CharacterSWComponent {

  // Con esta clase se crea un eventEmitter, el cual es una clase para poder emitir un tipo de dato
  // especifico, en este caso al instanciar la clase EventEmiter se quiere enviar un objeto tipo Character.
  // eventEmiter es como un wrapp que se puede enviar fuera del componente hijo.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public titulo:String =  'Nombre de Kalid';

  public characterShowed:Character = {
    name: 'dummy',
    power: 0
  }

  emitCharacter(){
    console.log(this.characterShowed);
    if(this.characterShowed.name.length == 0 ) return;

    this.onNewCharacter.emit(this.characterShowed);

    this.characterShowed={
      name:'',
      power: 0
    }

    // Esta forma de asignar valores no funciona
    // this.characterShowed.name='';
    // this.characterShowed.power=0;
  }

}
