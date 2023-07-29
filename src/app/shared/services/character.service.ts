import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  url = 'https://rickandmortyapi.com/api/character';

  searchCharacters(query='', page = 1) {
    const filter = `${this.url}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
  }

  getDetails(id: number){
    return this.http.get<Character>(`${this.url}/${id}`)
  }
}
