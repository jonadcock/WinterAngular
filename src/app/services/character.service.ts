import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateCharacter } from '../models/CreateCharacter';
import { CharacterDetail } from '../models/CharacterDetail';
import { Character } from '../models/Character';

const ApiUrl = 'https://westerosfantasyleague.azurewebsites.net/api';

@Injectable()

export class CharacterService {
    constructor(private _http: HttpClient) { }

    getCharacters() {
        return this._http.get(`${ApiUrl}/Character/All`, { headers: this.getHeaders() });
    }

    getCharacterById(id: string) {
        return this._http.get(`${ApiUrl}/Character/Single/${id}`, { headers: this.getHeaders() });
    }

    createCharacter(character: CreateCharacter) {
        return this._http.post(`${ApiUrl}/Character`, character, {headers: this.getHeaders() });
    }

    updateCharacter(character: Character) {
        return this._http.put(`${ApiUrl}/Character`, character, {headers: this.getHeaders() });
    }

    deleteCharacter(id: number) {
        return this._http.delete(`${ApiUrl}/Character/${id}`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}