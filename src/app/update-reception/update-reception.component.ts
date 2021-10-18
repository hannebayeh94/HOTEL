import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserServices} from '../services/user.services';
import Swal from 'sweetalert2';
import {Constantes} from '../commons/constantes';
declare var $;

@Component({
  selector: 'app-update-reception',
  templateUrl: './update-reception.component.html',
  styleUrls: ['./update-reception.component.css']
})
export class UpdateReceptionComponent implements OnInit {

  formReception: FormGroup;
  public receptionArray: ReceptionIn[];
  public seeReception: boolean;

  constructor(private readonly _form: FormBuilder, private readonly _userService: UserServices) {
    this.receptionArray = [];
    this.seeReception = false;
  }

  ngOnInit(): void {
    this.materializeInit();
    this.createFormReception();
    this.loadReceptions();
  }

  createFormReception() {
    this.formReception = this._form.group({
      id: [0],
      nombre: [''],
      apellidos: [''],
      telefono: [''],
      cedula: [''],
      fecha_nacimiento: [''],
      correo: [''],
      fecha_contrato: [''],
      salario: ['']
    });
  }

  materializeInit() {
    $('.datepicker').datepicker({
      format: 'dd mmmm, yyyy',
      autoClose: true,
      i18n: {
        cancel: 'Cancelar',
        done: 'Cerrar',
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Obtubre',
          'Noviembre',
          'Diciembre'
        ],
        monthsShort:
          [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Obtubre',
            'Noviembre',
            'Diciembre'
          ],
        weekdays: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sabado'
        ],
        weekdaysShort: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sabado'
        ],
        weekdaysAbbrev: [
          'S',
          'D',
          'L',
          'M',
          'M',
          'J',
          'V',
        ]
      }
    });
  }

  /*
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
   */

  loadReceptions() {
    this._userService.queryAllReception().subscribe((data: any) => {
      for (const i of data) {
        this.receptionArray.push(i);
      }
    });
  }

  selectReception(event) {
       this._userService.queryReceptionById(event.target.value).subscribe((data: ReceptionIn)=>{
         this.seeReception = true;
         this.formReception.controls['id'].setValue(data.id);
         this.formReception.controls['nombre'].setValue(data.nombre);
         this.formReception.controls['apellidos'].setValue(data.apellidos);
         this.formReception.controls['telefono'].setValue(data.telefono);
         this.formReception.controls['cedula'].setValue(data.cedula);
         this.formReception.controls['fecha_nacimiento'].setValue(data.fecha_nacimiento);
         this.formReception.controls['correo'].setValue(data.correo);
         this.formReception.controls['fecha_contrato'].setValue(data.fecha_contrato);
         this.formReception.controls['salario'].setValue(data.salario);
       });
  }

  updateReception() {
    // update service.
    this._userService.updateReception(this.formReception.value)
      .then(data => {
        if (data !== null) {
          Swal.fire({
            title: 'Solicitud exitosa',
            text: 'Recepcionista actualizado correctamente',
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

interface ReceptionIn {
  id: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  cedula: number;
  fecha_nacimiento: string;
  correo: string;
  fecha_contrato: string;
  salario: number;
  id_type_user: number;
}
