import { CanDeactivateFn } from '@angular/router';
import { CharacterDetailsComponent } from '@app/components/pages/characters/character-details/character-details.component';


export const canDeactivateCharacter: CanDeactivateFn<CharacterDetailsComponent> = (
  component: CharacterDetailsComponent
) => {

    if (component.canExit) {
      return window.confirm('Deseja sair da página? As alterações não salvas serão perdidas.');

    } else {
      return true;
    }

}
