import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: String = "Iron Man";
  public age: number = 45;

  get capitalizedName(): String{
    return this.name.toUpperCase();
  }

  getHeroDescription():String{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(newName: String):void{
    this.name=newName;
  }

  changeAge(newAge: number):void{
    this.age = newAge;
  }

  resetForm():void{
    this.name = "Iron Man";
    this.age = 45;
  }

}
