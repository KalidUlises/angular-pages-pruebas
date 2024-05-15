import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  public heroNames:String[] = ['Ironma', 'Hulk', 'Thor', 'Balckwidow', 'Hawkeye'];
  public deleteHero?: String;

  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
  }



}
