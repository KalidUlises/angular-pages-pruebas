import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class SwService {

  public charactersList: Character[] = [
    {
      id: uuid(),
      name: 'Darth Vader',
      power: 98
    },{
      id: uuid(),
      name:'Mauce Windu',
      power: 94
    },
    {
      id: uuid(),
      name: 'Obi Wan',
      power: 97
    }
  ];

  addCharacter2List(character : Character): void{
    // * no es necesario pasar cada uno de los parametros, podemos usar el operador spread. '...character'
    // const newcharacter :Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter: Character = {id: uuid(), ...character};
    this.charactersList.push(newCharacter);
  }

  deleteCharacter(index: number){
    // console.log('Elemento a eliminar ' + this.charactersList[index].name);
    this.charactersList.splice(index,1);
  }

  deleteCharacterById(idCharacter:String){
    this.charactersList = this.charactersList.filter( character => character.id !== idCharacter );
  }

}
