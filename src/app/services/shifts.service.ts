import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constantes} from '../commons/constantes';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private header: HttpHeaders;
  private url: string;

  constructor(private readonly http: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
    this.url = Constantes.url;
  }

  report(date: object){
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}type-user/report-shift`, JSON.stringify(date), {headers: this.header})
        .subscribe(data=>resolve(data), err=>reject(err));
    });
  }
}
