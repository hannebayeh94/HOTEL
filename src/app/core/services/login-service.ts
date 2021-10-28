import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../interfaces/login';
import {Constantes} from '../../commons/constantes';

@Injectable()
export class LoginService {

  private httpHeader: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeader = new HttpHeaders().set('Content-Type', 'application/json');
  }

  sendLogin(login: Login) {
    return this.http.get(`${Constantes.url}type-user/login/${login.username}/${login.password}`,
      {headers: this.httpHeader});
  }
}
