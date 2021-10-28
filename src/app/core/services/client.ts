import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constantes} from '../../commons/constantes';
import {ClientIn} from '../interfaces/clientIn';

@Injectable()
export class ClientService {

  header: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  saveClient(client: ClientIn) {
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}client/create-client`, JSON.stringify(client), {headers: this.header})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  queryListDepartment() {
    return this.http.get(`${Constantes.url}client/list-deparment`, {headers: this.header});
  }

  queryCityOrMunicipality(id_department: number) {
    return this.http.get(`${Constantes.url}client/getCityOrMunicipality/${id_department}`, {headers: this.header});
  }

  queryClientExist(identificationcard: number) {
    return this.http.get(`${Constantes.url}client/getClient/${identificationcard}`, {headers: this.header});
  }

  queryClientById(id: number) {
    return this.http.get(`${Constantes.url}client/getClientById/${id}`, {headers: this.header});
  }

  updateRoomAccomodateById(id: number, state: boolean) {
    return this.http.get(`${Constantes.url}client/update-room/${id}/${state}`, {headers: this.header});
  }

}
