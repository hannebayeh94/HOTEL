import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';
import Swal from 'sweetalert2';
import {Constantes} from '../commons/constantes';
import {RoomIn} from '../interfaces/roomIn';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  formRoom: FormGroup;
  listRoom: RoomI[];

  constructor(
    private readonly _form: FormBuilder,
    private readonly _room: RoomService,
    private readonly _product: ProductService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.loadRoom();
  }

  createForm() {
    this.formRoom = this._form.group({
      id: [''],
      number_room: [''],
      number_persons: [''],
      price: [''],
      state: [false],
      registration_date: [new Date().getTime()]
    });
  }

  updateRoom() {
    this.formRoom.value.number_room = this.formRoom.value.number_room.toUpperCase();
    this._room.updateRoom(this.formRoom.value).then((data: any) => {
      Swal.fire({
        title: 'Habitación Actualizada',
        text: 'La habitación se ha actualizado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }).catch(e => {
      Swal.fire({
        title: 'Error',
        text: 'La habitación ya existe en el sistema',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    });
  }

  validateForm(field) {

    let value = true;

    if (field.value.number_room == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La referencia o numero del cuarto es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.number_persons == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El numero de personas para este cuarto es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.price == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El precio es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    }
    return value;
  }

  selectRoom(event) {
    this._room.queryRoomById(event.target.value).subscribe((data: RoomI) => {
      this.formRoom.controls['id'].setValue(data.id);
      this.formRoom.controls['number_room'].setValue(data.number_room);
      this.formRoom.controls['number_persons'].setValue(data.number_persons);
      this.formRoom.controls['price'].setValue(data.price);
      this.formRoom.controls['state'].setValue(data.state);
      this.formRoom.controls['registration_date'].setValue(data.registration_date);
    });
  }

  loadRoom() {
    this._room.queryListRoom().subscribe((data: RoomI[]) => this.listRoom = data);
  }
}

class RoomI {
  id: number;
  number_room: string;
  number_persons: number;
  price: number;
  state: boolean;
  registration_date: string;
}
