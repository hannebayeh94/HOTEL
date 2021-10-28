import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constantes} from '../../commons/constantes';

@Injectable()
export class RoomService {

  private header: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  queryListRoom() {
    return this.http.get(`${Constantes.url}room/getListRoom`, {headers: this.header});
  }

  queryListStateRooms(state: number) {
    return this.http.get(`${Constantes.url}room/state-rooms/${state}`, {headers: this.header});
  }

  queryAccommodateRoom(room: string, state: number) {
    return this.http.get(`${Constantes.url}room/accommodate-room/${room}/${state}`, {headers: this.header});
  }

  updateRoomById(id, state){
    return this.http.get(`${Constantes.url}room/update-room/${id}/${state}`, {headers: this.header});
  }

  report(date: object){
    return new Promise((resolve, reject) => {
        this.http.post(`${Constantes.url}room/report-room`, JSON.stringify(date), {headers: this.header})
          .subscribe(data=>resolve(data), err=>reject(err));
    });
  }

  getRoom(room: string){
    return this.http.get(`${Constantes.url}room/get-room/${room}`, {headers: this.header});
  }

  updateRoom(room){
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}room/update-room`, JSON.stringify(room), {headers: this.header})
        .subscribe(data=>resolve(data), err=>reject(err));
    });
  }

  queryRoomById(id: number){
    return this.http.get(`${Constantes.url}room/get-room-id/${id}`, {headers: this.header});
  }

}
