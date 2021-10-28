import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClientService} from '../../core/services/client';
import Swal from 'sweetalert2';
import {Constantes} from '../../commons/constantes';
import {DepartmentIn} from '../../core/interfaces/departmentIn';
import {CityOrMunicipalityIn} from '../../core/interfaces/cityOrMunicipalityIn';
import {RoomIn} from '../../core/interfaces/roomIn';
import {RoomService} from '../../core/services/room.service';
import {AccommodateIn} from '../../core/interfaces/accommodateIn';
import {ClientIn} from '../../core/interfaces/clientIn';
import {Materialize} from '../../core/class/materialize';

declare var $;

@Component({
  selector: 'app-registry-client',
  templateUrl: './registry-client.component.html',
  styleUrls: ['./registry-client.component.css']
})
export class RegistryClientComponent implements OnInit {

  formClient: FormGroup;
  private dateofexpedition: string;
  public listaDepartamentos: DepartmentIn[];
  public listaCiudadOMunicipios: CityOrMunicipalityIn[];
  public listRoom: RoomIn[];
  public listNumber: number[];
  public dataDefault: AccommodateIn;
  private room: RoomI;
  private client: ClientIn;
  public persons: number;
  public height: number;


  @Input() clientInput: any;
  @Input() idReception: number;
  @Output() roomAccommodate: EventEmitter<any>;
  @Output() balance: EventEmitter<number>;

  constructor(
    private readonly _client: ClientService,
    private readonly _room: RoomService,
    private readonly _form: FormBuilder) {
    this.persons = 0;
    this.listNumber = [];
    this.dateofexpedition = null;
    this.client = null;
    this.room = null;
    this.roomAccommodate = new EventEmitter();
    this.balance = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.createForm();
    Materialize.datepickerInit('dd mmmm, yyyy');
    this.loadingNumber();
    this.listDepartment();
    this.getListRoom();
    if (typeof this.clientInput != 'undefined' || this.clientInput != null) {
      let {room, client} = this.clientInput;
      this.room = room;
      this.client = client;
      this.formClient.controls['name'].setValue(this.client.name);
      this.formClient.controls['telephone'].setValue(this.client.telephone);
      this.formClient.controls['type_document'].setValue(this.client.type_document);
      this.formClient.controls['identificationcard'].setValue(this.client.identificationcard);
      this.formClient.controls['date_of_expedition'].setValue(this.client.date_of_expedition);
      this.formClient.controls['number_room'].setValue(this.room.number_room);
      this.formClient.controls['number_persons'].setValue(this.persons);
      this.formClient.controls['name'].disable();
      this.formClient.controls['telephone'].disable();
      this.formClient.controls['type_document'].disable();
      this.formClient.controls['identificationcard'].disable();
      this.formClient.controls['date_of_expedition'].disable();
      this.formClient.controls['number_room'].disable();
      this.selectRoom(this.room.number_room);
    }
  }

  loadRoom(room: string) {
    this._room.getRoom(room).subscribe((data: any) => {
      if (data.state) {
        this.formClient.controls['number_persons'].disable();
        this.formClient.controls['number_persons'].setValue(data.room.number_persons);
        this.persons = data.room.number_persons;
      }
    });
  }

  createForm() {
    this.formClient = this._form.group({
      name: [''],
      telephone: [''],
      type_document: [''],
      identificationcard: [''],
      date_of_expedition: [''],
      origin: [''],
      number_room: [0],
      number_day: [0],
      number_persons: [0],
      id_reception: [this.idReception],
      registration_date: [new Date().getTime()]
    });
  }

  dateOn(event) {
    this.formClient.controls['date_of_expedition'].setValue(event.target.value);
  }

  registryClient() {

    this.formClient.controls['name'].enable();
    this.formClient.controls['telephone'].enable();
    this.formClient.controls['type_document'].enable();
    this.formClient.controls['identificationcard'].enable();
    this.formClient.controls['date_of_expedition'].enable();
    this.formClient.controls['number_room'].enable();

    this.formClient.value.number_persons = this.persons;

    if (this.validateForm(this.formClient)) {
      this._client.saveClient(this.formClient.value).then((data: any) => {
        if (data.state) {
          this.formClient.reset();
          Swal.fire({
            title: 'Registro exitoso',
            text: 'El cliente se ha hospedado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          // emiter
          this.roomAccommodate.emit({
            route: 'seeOnRegistryClient',
            destinyRoute: 'seeOnRoomBusy'
          });

          this.balance.emit(data.balance);

        } else {
          Swal.fire({
            title: 'Error',
            text: data.error,
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    } else {
      this.formClient.controls['name'].disable();
      this.formClient.controls['telephone'].disable();
      this.formClient.controls['type_document'].disable();
      this.formClient.controls['identificationcard'].disable();
      this.formClient.controls['date_of_expedition'].disable();
      this.formClient.controls['number_room'].disable();
    }
  }

  validateForm(field) {

    let value = true;

    if (field.value.name == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El nombre es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.type_document == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El tipo de documento es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.identificationcard == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La cedula es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.date_of_expedition == null) {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La fecha de expedición es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.origin == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La procedencia es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.number_room == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La habitación es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.number_day == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El numero de días es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.number_persons == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El numero de personas a ocupar la habitación es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    }
    return value;
  }

  listDepartment() {
    this._client.queryListDepartment().subscribe((data: any) => this.listaDepartamentos = data);
  }

  departmentSelect(event) {
    this.listaCiudadOMunicipios = [];
    this._client.queryCityOrMunicipality(event.target.value)
      .subscribe((data: any) => this.listaCiudadOMunicipios = data);
  }

  getListRoom() {
    return this._room.queryListStateRooms(0).subscribe((data: any) => {
      this.listRoom = data;
      if (this.clientInput != null) {
        setTimeout(() => {
          this.formClient.controls['number_room'].setValue(this.clientInput.room.number_room);
        }, 1000);
      }
    });
  }

  loadingNumber() {
    for (let i = 1; i <= 365; i++) {
      this.listNumber.push(i);
    }
  }

  selectRoom(item: any) {

    let room = null;

    if (this.clientInput != null) {
      room = item;
    } else {
      room = item.target.value;
    }

    this._room.getRoom(room).subscribe((data: any) => {
      if (data.state) {
        this.formClient.controls['number_persons'].disable();
        this.formClient.controls['number_persons'].setValue(data.room.number_persons);
        this.persons = data.room.number_persons;
      }
    });
  }

  /*
  // cargar el saldo base del recepcionista.
  loadBalance(idReception: number) {
    this._balance.getBalance(idReception).subscribe((data: any) => {
      console.log('data of balance:', data);
      if (data.state) {
        this.balanceCurrent = data.balance.balance_current;
      }
    }, err => console.error(err));
  }

   */
  selectPerson($event: Event) {
    this.persons = $event.target['value'];
  }
}

interface RoomI {
  id: number;
  number_room: string;
  number_persons: number;
  price: number;
  state: boolean;
  registration_date: string;
}
