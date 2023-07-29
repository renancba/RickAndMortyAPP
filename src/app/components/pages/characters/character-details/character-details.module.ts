import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterComponent } from '../character.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    RouterModule,
  ]
})
export class CharacterDetailsModule { }
