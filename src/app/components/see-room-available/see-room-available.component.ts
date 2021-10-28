import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoomService} from '../../core/services/room.service';
import {RoomIn} from '../../core/interfaces/roomIn';
import {ClientService} from '../../core/services/client';
import {ClientIn} from '../../core/interfaces/clientIn';
import * as moment from 'moment';

declare var $;

@Component({
  selector: 'app-see-room-available',
  templateUrl: './see-room-available.component.html',
  styleUrls: ['./see-room-available.component.css']
})
export class SeeRoomAvailableComponent implements OnInit {

  public listRoom: RoomIn[];
  private room: RoomIn;
  public client: ClientIn;
  private clientTemp;
  cedula: number;
  messageFieldVoid: string;

  @Output() clientOutput: EventEmitter<any>;

  constructor(private readonly _room: RoomService, private readonly _client: ClientService) {
    this.cedula = null;
    this.clientTemp = {
      name: null,
      telephone: null,
      identificationcard: null
    }
    this.client = this.clientTemp;
    this.clientOutput = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.listRooms();
  }

  listRooms() {
    this._room.queryListStateRooms(0).subscribe((data: any) => this.listRoom = data);
  }

  openModal(room) {
    this.room = room;
    $('#modal-host-client').modal();
  }

  search(){
         if(this.cedula == null){
           this.messageFieldVoid = 'Error, el campo de la cedula esta vacio';
           this.client = this.clientTemp;
         }else{
           this.messageFieldVoid = '';
           this._client.queryClientExist(this.cedula).subscribe((data: any)=>{
             data.client!=null?this.client=data.client:this.client=this.clientTemp
           });
         }
  }

  accommodate() {
     this.clientOutput.emit({
       client: this.client,
       room: this.room
     });
  }



}
