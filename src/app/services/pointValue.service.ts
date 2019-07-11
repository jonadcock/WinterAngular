import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PointValueCreate } from '../models/PointValueCreate';
import { PointValue } from '../models/PointValue';

const ApiUrl = 'https://winterclienttfraley.azurewebsites.net/api';

@Injectable()

export class PointValueService {
    constructor(private _http: HttpClient) { }

    getPointValues() {
        return this._http.get(`${ApiUrl}/PointValues/All`, { headers: this.getHeaders() });
    }

    getPointValueById(id: string) {
        return this._http.get(`${ApiUrl}/PointValues/Single/${id}`, { headers: this.getHeaders() });
    }

    getPointValueByCharacterId(id: number) {
        return this._http.get(`${ApiUrl}/PointValues/SingleByCharacter/${id}`, { headers: this.getHeaders() })
    }

    createPointValue(pointValue: PointValueCreate) {
        return this._http.post(`${ApiUrl}/Values`, pointValue, {headers: this.getHeaders() });
    }

    updatePointValues(pointValue: PointValue) {
        return this._http.put(`${ApiUrl}/Values`, pointValue, {headers: this.getHeaders() });
    }

    deletePointValue(id: number) {
        return this._http.delete(`${ApiUrl}/Values/${id}`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}