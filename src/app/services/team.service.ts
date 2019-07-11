import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateTeam } from '../models/CreateTeam';
import { TeamDetail } from '../models/TeamDetail';

const ApiUrl = 'https://winterclienttfraley.azurewebsites.net/api';

@Injectable()

export class TeamService {

  constructor(private _http: HttpClient) { }

  getTeams() {
    return this._http.get(`${ApiUrl}/Team/All`, { headers: this.getHeaders() });
  }

  getTeam(id: string) {
    return this._http.get(`${ApiUrl}/Team/Single/${id}`, { headers: this.getHeaders() });
  }

  getAllButTeam(id: string) {
    return this._http.get(`${ApiUrl}/TeamCharacter/AllButTeam/${id}`, { headers: this.getHeaders() });
  }

  createTeam(team: CreateTeam) {
    return this._http.post(`${ApiUrl}/Team`, team, { headers: this.getHeaders()});
  }

  updateTeam(team: TeamDetail) {
    return this._http.put(`${ApiUrl}/Notes`, team, { headers: this.getHeaders() });
  }

  deleteTeam(id: number) {
    return this._http.delete(`${ApiUrl}/Team/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
 