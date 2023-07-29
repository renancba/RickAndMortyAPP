import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit{

  character$!: Observable<Character>;

  canExit: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router,
    ) {}

    ngOnInit(): void {
      this.route.params.pipe(take(1)).subscribe((params) => {
        const id = params['id'];
        this.character$ = this.characterService.getDetails(id);
      });
    }

    onGoBack() : void{
      this.router.navigate(['/home']);
    }

}
