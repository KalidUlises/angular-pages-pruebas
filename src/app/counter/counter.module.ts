import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    CounterComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    CounterComponent
  ]
})

export class CounterModule{}
