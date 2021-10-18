import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';
import Swal from "sweetalert2";
import {Constantes} from '../commons/constantes';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  formRoom: FormGroup;

  constructor(private readonly _form: FormBuilder, private readonly _product: ProductService) { }

  ngOnInit(): void {
   this.createForm();
  }

  createForm(){
    this.formRoom = this._form.group({
      number_room: [''],
      number_persons: [''],
      price: [''],
      state: [false],
      registration_date: [new Date().getTime()]
    });
  }

  createRoom(){
    this.formRoom.value.number_room = this.formRoom.value.number_room.toUpperCase();
    if(this.validateForm(this.formRoom)){
      this._product.createRoom(this.formRoom.value).then((data: any)=>{
        if(data.state){
          Swal.fire({
            title: 'Habitación creada',
            text: 'La habitación se ha creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        }else{
          Swal.fire({
            title: 'Error',
            text: 'La habitación ya existe en el sistema',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    }
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


}
