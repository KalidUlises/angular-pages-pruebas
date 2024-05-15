import { Component } from "@angular/core";

// app-  se usa para definir los componentes personalizados
@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{counter}}</h3>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(1)">+1</button>
  `
})

export class CounterComponent{
  counter: number = 10;

  increaseBy(num: number): void{
    this.counter += num;
  };

  resetCounter():void{
    this.counter = 10;
  }
};
