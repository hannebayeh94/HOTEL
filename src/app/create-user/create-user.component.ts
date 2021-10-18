import Swal from "sweetalert2";
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserServices} from '../services/user.services';
import {Constantes} from '../commons/constantes';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formCreateUser: FormGroup;
  constructor(private readonly _form: FormBuilder, private readonly _createUser: UserServices) { }

  ngOnInit(): void {
    this.createFormUser();
  }

  createFormUser(){
    this.formCreateUser = this._form.group({
      type: [''],
      username: [''],
      password: [''],
      nombre: [''],
      apellidos: [''],
      cedula: [''],
      correo: [''],
      telefono: ['']
    });
  }
// 018000128770
  createUser(){
    if(this.validateForm(this.formCreateUser)) {
      this._createUser.createUser(this.formCreateUser.value)
        .then(data => {
          if (data !== null) {
            Swal.fire({
              title: 'Solicitud exitosa',
              text: 'Usuario creado correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          }
        }).catch(e=>{
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorOfRegistry,
          text: e.error.message,
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      })
    }
  }

  validateForm(field){

      let value = true;

      if(field.value.type == ''){
          Swal.fire({
            title: Constantes.FIELD_CREATE_USER.errorVoidField,
            text: 'El tipo de usuario es necesario',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
          value = false;
      }

      else if(field.value.username == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'El usuario es necesario',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        value = false;
      }

      else if (field.value.password == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'La contraseña es necesaria',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
       value = false;
      }

      else if (field.value.nombre == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'El nombre es necesario',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        value = false;
      }

      else if (field.value.apellidos == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'Los apellidos son necesarios',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        value = false;
      }

      else if (field.value.cedula == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'La cedula es necesaria',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        value = false;
      }

      else if (field.value.correo == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'El correo es necesario',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        value = false;
      }

      else if (field.value.telefono == ''){
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorVoidField,
          text: 'El teléfono es necesario',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        value = false;
      }
      return value;
  }

  // pendiente por trabajar.
  loadSuperUser(){

  }


}
