import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent
  ]
})
export class CharactersModule { }
