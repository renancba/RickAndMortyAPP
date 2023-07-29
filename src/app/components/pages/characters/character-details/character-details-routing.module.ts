import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details.component';
import { canDeactivateCharacter } from '@app/shared/guards/can-deactivate.guard';

const routes: Routes = [{ path: '', component: CharacterDetailsComponent, canDeactivate: [canDeactivateCharacter]  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailsRoutingModule { }
