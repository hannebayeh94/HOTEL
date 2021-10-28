import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserServices} from '../../core/services/user.services';
import Swal from 'sweetalert2';
import {Constantes} from '../../commons/constantes';
import {Materialize} from '../../core/class/materialize';

declare var $;

@Component({
  selector: 'app-create-reception',
  templateUrl: './create-reception.component.html',
  styleUrls: ['./create-reception.component.css']
})
export class CreateReceptionComponent implements OnInit {

  formReception: FormGroup;
  private dateOfBirth: string;
  private dateOfContract: string;

  constructor(private readonly _form: FormBuilder, private readonly _userService: UserServices) {
  }

  ngOnInit(): void {
    Materialize.datepickerInit('dd mmmm, yyyy');
    this.createFormReception();
  }

  createFormReception() {
    this.formReception = this._form.group({
      nombre: [''],
      apellidos: [''],
      telefono: [''],
      cedula: [''],
      fecha_nacimiento: [''],
      correo: [''],
      fecha_contrato: [''],
      salario: [''],
      username: [''],
      password: [''],
      privilege: [false]
    });
  }

  createReception() {

    this.formReception.value.fecha_nacimiento = this.dateOfBirth;
    this.formReception.value.fecha_contrato = this.dateOfContract;
    console.log('from:', this.formReception.value);
    if (this.validateForm(this.formReception)) {
      this._userService.createReception(this.formReception.value)
        .then(data => {
          if (data !== null) {
            Swal.fire({
              title: 'Solicitud exitosa',
              text: 'Recepcionista creado correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          }
        }).catch(e => {
        Swal.fire({
          title: Constantes.FIELD_CREATE_USER.errorOfRegistry,
          text: e.error.message,
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }

  validateForm(field) {

    let value = true;

    if (field.value.nombre == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El nombre de recepcionista es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.apellidos == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'Los apellidos del recepcionista son necesarios',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.telefono == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El telefono del recepcionista es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.cedula == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La cedula del recepcionista es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.fecha_nacimiento == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'Los fecha de nacimiento es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.correo == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El correo es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.fecha_contrato == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La fecha del contrato es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.salario == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El monto del salario es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.username == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El usuario es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.password == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La contraseña es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    }
    return value;
  }

  dateOf(event){
    const id = event.target.id;
    if(id == 'dateOfBirth'){
        this.dateOfBirth = event.target.value;
    }
    else if(id == 'dateOfContract'){
      this.dateOfContract = event.target.value;
    }
  }

}
