import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { filter, take } from 'rxjs';
import { DOCUMENT } from '@angular/common';


type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
    ) {this.onUrlChanged()
    }
    ngOnInit(): void {
        this.getCharacters();
    }

  characters : Character[] = []
  info: RequestInfo = {
    next: "",
  }

  showGoUpButton = false;
  private pageNum = 1;
  private query: string = "";
  private hideSrollHeight = 200;
  private showSrollHeight = 500;

  private onUrlChanged(){
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.characters = [];
          this.pageNum = 1;
          this.getCharactersFilter();
        });

  }

  private getCharacters(): void {
    this.characterService.searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe(( resp : any )=> {
      if (resp?.results?.length){
        const {info, results} = resp;
        this.characters = [...this.characters, ...results];
        this.info = info;
      } else {
        this.characters = [];
      }
    })
  }

  private getCharactersFilter() {
    this.route.queryParams
    .pipe(take(1))
    .subscribe((params: any) => {
        this.query = params['q'];
        this.getCharacters();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
      const yOffSet = window.scrollY;
      if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showSrollHeight){
        this.showGoUpButton = true;
      } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideSrollHeight) {
        this.showGoUpButton = false;
      }
  }


  onScrollDown(): void {
    if (this.info.next){
      this.pageNum++;
      this.getCharacters();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}

