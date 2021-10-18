import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constantes} from '../commons/constantes';
import {UserIn} from '../interfaces/userIn';
import {ReceptionIn} from '../interfaces/receptionIn';

@Injectable()
export class UserServices {

  private httpHeader: HttpHeaders;
  private url: string;

  constructor(private readonly http: HttpClient) {
    this.httpHeader = new HttpHeaders().set('Content-Type', 'application/json');
    this.url = Constantes.url;
  }

  createUser(user: UserIn) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}type-user/create-type-user`, JSON.stringify(user), {headers: this.httpHeader})
        .subscribe((data) => resolve(data), err => reject(err));
    });
  }

  createReception(reception: ReceptionIn) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}type-user/create-reception`, JSON.stringify(reception), {headers: this.httpHeader})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  updateReception(reception: ReceptionIn) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}type-user/update-reception`, JSON.stringify(reception), {headers: this.httpHeader})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  queryAllReception() {
    return this.http.get(`${Constantes.url}type-user/get-all-reception`);
  }

  queryReceptionByIdTypeUser(id: number) {
    return this.http.get(`${Constantes.url}type-user/get-reception/${id}`, {headers: this.httpHeader});
  }

  queryReceptionById(id: number) {
    return this.http.get(`${Constantes.url}type-user/get-reception-id/${id}`, {headers: this.httpHeader});
  }

  sendMessageForSuperUser(message: string) {
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}type-user/create-message-for-super-user`, JSON.stringify({message}), {headers: this.httpHeader})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  deliverTurn(id: number, balance: number) {
    return this.http.get(`${Constantes.url}type-user/deliver-turn/${id}/${balance}`, {headers: this.httpHeader});
  }

}
