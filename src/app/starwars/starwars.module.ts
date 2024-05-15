import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListSWComponent } from './components/listSW/listSW.component';
import { CharacterSWComponent } from './components/addCharacterSW/character-sw.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListSWComponent,
    CharacterSWComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class StarwarsModule { }
