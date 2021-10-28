import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constantes} from '../../commons/constantes';

@Injectable()
export class BalanceService {

  private header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  insertBalance(balance) {
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}balance/create-balance`, JSON.stringify(balance), {headers: this.header})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  getBalance(){
       return this.http.get(`${Constantes.url}balance/get-balance`, {headers: this.header});
  }

  updateBalance(balance){
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}balance/withdraw-balance`, JSON.stringify(balance), {headers: this.header})
        .subscribe(data=>resolve(data), err=>reject(err));
    });
  }

}
