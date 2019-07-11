import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamCharacterCreate } from '../models/TeamCharacterCreate';

const ApiUrl = 'https://winterclienttfraley.azurewebsites.net/api';

@Injectable()

export class TeamCharacterService {

  constructor(private _http: HttpClient) { }

  getTeamCharacters() {
    return this._http.get(`${ApiUrl}/TeamCharacter/All`, { headers: this.getHeaders() });
  }

  getTeamCharacterById(id: string) {
    return this._http.get(`${ApiUrl}/TeamCharacter/Single/${id}`, { headers: this.getHeaders() });
  }

  createTeamCharacter(teamCharacter: TeamCharacterCreate) {
    return this._http.post(`${ApiUrl}/TeamCharacter`, teamCharacter, { headers: this.getHeaders()});
  }

  deleteTeamCharacter(characterId: number, teamId: number) {
    return this._http.delete(`${ApiUrl}/TeamCharacter?characterId=${characterId}&teamId=${teamId}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
 