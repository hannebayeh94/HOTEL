import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {RoomService} from '../../core/services/room.service';
import {RoomIn} from '../../core/interfaces/roomIn';
import {ClientService} from '../../core/services/client';

declare var $;

@Component({
  selector: 'app-see-room-busy',
  templateUrl: './see-room-busy.component.html',
  styleUrls: ['./see-room-busy.component.css']
})
export class SeeRoomBusyComponent implements OnInit {

  public time: number;
  public listRoom: any[];
  public client;
  private roomId: number;

  constructor(private readonly _room: RoomService, private readonly _client: ClientService) {
    this.client = {name: null, telephone: null, identificationcard: null};
  }

  ngOnInit(): void {
    this.listRooms();
  }

  listRooms() {
    this._room.queryListStateRooms(1).subscribe((data: any) => this.listRoom = data);
  }

  openModal(i: any) {
    $('#modal-host-client').modal();
    this.roomId = i.id;
    this._room.queryAccommodateRoom(i.number_room, 1)
      .subscribe((data: any) => {
        if (data.room != null) {
          this.time = Number(data.room.stay);
          this._client.queryClientById(data.room.id_client).subscribe(data => this.client = data);
        }
      });
  }

  freeRoom() {
    this._room.updateRoomById(this.roomId, false).subscribe((data: any) => {
      if (data.raw.affectedRows != 0) {
       this.listRoom = this.listRoom.filter(i => i.id != this.roomId);
       this._client.updateRoomAccomodateById(this.client.id, false).subscribe(data=>console.log('update accommodate:', data));
      }
    });
  }
}
