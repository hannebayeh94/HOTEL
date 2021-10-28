
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServices } from '../core/services/user.services';
import { BalanceService } from '../core/services/balance.service';
import { Materialize } from '../core/class/materialize';
import { ClientIn } from '../core/interfaces/clientIn';
declare var $;

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

seeOnSalesClient: boolean;
seeOnOrdinarySales: boolean;
seeOnCreateRoom: boolean;
seeOnUpdateRoom: boolean;
seeOnCreateReception: boolean;
seeOnUpdateReception: boolean;
seeOnCreateProduct: boolean;
seeOnupdateProduct: boolean;
seeOnRegistryClient: boolean;
seeOnRoomAvailable: boolean;
seeOnRoomBusy: boolean;
seeOnUser: boolean;
seeOnSectionProduct: boolean;
// tslint:disable-next-line:typedef
seeonReport: boolean;
seeOnReportSales: boolean;
reception: any[];

public user;
private idReception: number;
private idReceptionUser: number;
public userRoot: boolean;
public receptionAdmin: boolean;

public clientInp: any;
public offConfigSuperUser: boolean;
balance: number;
balanceCurrent;
balanceWithdraw: number;
message: string;
public height: number;


constructor(
 private readonly router: Router,
 private readonly _user: UserServices,
 private readonly _balance: BalanceService) {
 this.userRoot = false;
 this.receptionAdmin = false;
}

ngOnInit(): void {
 this.height = window.innerHeight;
 Materialize.collapsible();
 this.loadUser();

 this.balance = 0;
 this.balanceWithdraw = 0;
 this.reception = [];
 this.idReception = 0;
 this.idReceptionUser = 0;

 this.loadReceptionById();
 this.loadBalance();
 this.seeOnSalesClient = false;
 this.seeOnOrdinarySales = false;
 // see create.
 this.seeOnCreateRoom = false;
 this.seeOnCreateReception = false;
 this.seeOnCreateProduct = false;
 this.seeOnRegistryClient = false;
 this.seeOnRoomAvailable = false;
 this.seeOnRoomBusy = false;
 this.seeOnUser = false;
 this.seeOnSectionProduct = false;
 // see update.
 this.seeOnUpdateReception = false;
 this.seeOnupdateProduct = false;
 this.seeOnUpdateRoom = false;
 this.seeonReport = false;
 this.seeOnReportSales = false;
 this.offConfigSuperUser = true;

 if (this.user != null) {
   console.log('user:', this.user);
   if (this.user.type === 'reception-admin') {
     this.receptionAdmin = true;
   }
   if (this.user.type === 'super-root') {
     this.userRoot = true;
   }
 }
}

onSee(event) {

 const id = event.target.id;
 this.displayOptions();

 switch (id) {
   case 'client':
     this.seeOnSalesClient = true;
     break;
   case 'ordinary':
     this.seeOnOrdinarySales = true;
     break;
   case 'create-reception':
     this.seeOnCreateReception = true;
     break;
   case 'id_recep_1':
     this.seeOnCreateReception = true;
     break;
   case 'id_recep_2':
     this.seeOnCreateReception = true;
     break;
   case 'id_recep_3':
     this.seeOnCreateReception = true;
     break;
   case 'id_recep_4':
     this.seeOnCreateReception = true;
     break;
   case 'create-product':
     this.seeOnCreateProduct = true;
     break;
   case 'id_prod_1':
     this.seeOnCreateProduct = true;
     break;
   case 'id_prod_2':
     this.seeOnCreateProduct = true;
     break;
   case 'id_prod_3':
     this.seeOnCreateProduct = true;
     break;
   case 'id_prod_4':
     this.seeOnCreateProduct = true;
     break;
   case 'update-product':
     this.seeOnupdateProduct = true;
     break;
   case 'id_prod_upd_1':
     this.seeOnupdateProduct = true;
     break;
   case 'id_prod_upd_2':
     this.seeOnupdateProduct = true;
     break;
   case 'id_prod_upd_3':
     this.seeOnupdateProduct = true;
     break;
   case 'id_prod_upd_4':
     this.seeOnupdateProduct = true;
     break;
   case 'create-room':
     this.seeOnCreateRoom = true;
     break;
   case 'id_room_1':
     this.seeOnCreateRoom = true;
     break;
   case 'id_room_2':
     this.seeOnCreateRoom = true;
     break;
   case 'id_room_3':
     this.seeOnCreateRoom = true;
     break;
   case 'id_room_4':
     this.seeOnCreateRoom = true;
     break;
   case 'update-room':
     this.seeOnUpdateRoom = true;
     break;
   case 'id_room_upd_1':
     this.seeOnUpdateRoom = true;
     break;
   case 'id_room_upd_2':
     this.seeOnUpdateRoom = true;
     break;
   case 'id_room_upd_3':
     this.seeOnUpdateRoom = true;
     break;
   case 'id_room_upd_4':
     this.seeOnUpdateRoom = true;
     break;
   case 'update-reception':
     this.seeOnUpdateReception = true;
     break;
   case 'id_recep_upd_1':
     this.seeOnUpdateReception = true;
     break;
   case 'id_recep_upd_2':
     this.seeOnUpdateReception = true;
     break;
   case 'id_recep_upd_3':
     this.seeOnUpdateReception = true;
     break;
   case 'id_recep_upd_4':
     this.seeOnUpdateReception = true;
     break;
   case 'client-input':
     this.seeOnRegistryClient = true;
     break;
   case 'see-room-available':
     this.seeOnRoomAvailable = true;
     break;
   case 'see-room-busy':
     this.seeOnRoomBusy = true;
     break;
   case 'super-root':
     this.seeOnUser = true;
     break;
   case 'super-root_1':
     this.seeOnUser = true;
     break;
   case 'super-root_2':
     this.seeOnUser = true;
     break;
   case 'super-root_3':
     this.seeOnUser = true;
     break;
   case 'super-root_4':
     this.seeOnUser = true;
     break;
   case 'create-product-category':
     this.seeOnSectionProduct = true;
     break;
   case 'id_sec_1':
     this.seeOnSectionProduct = true;
     break;
   case 'id_sec_2':
     this.seeOnSectionProduct = true;
     break;
   case 'id_sec_3':
     this.seeOnSectionProduct = true;
     break;
   case 'id_sec_4':
     this.seeOnSectionProduct = true;
     break;
   case 'room-report':
     this.seeonReport = true;
     break;
   case 'report-sales':
     this.seeOnReportSales = true;
     break;
   default:
 }
}

openModal(event) {

 const id = event.target.id;

 if (this.user != null) {
   if (this.user.type !== 'super-root') {
     if (this.user.type !== 'reception-admin') {
       $('#modal-super-root').modal();
       this.offConfigSuperUser = false;
       return;
     }
   }
 }

 switch (id) {
   case 'create':
     $('#modal-create-section').modal();
     break;
   case 'update':
     $('#modal-update-section').modal();
     break;
   case 'create-balance':
     $('#modal-create-base-balance').modal();
     this.loadReception();
     break;
   case 'update-balance':
     $('#modal-update-base-balance').modal();
     this.loadReception();
     break;
   case 'deliver_turn':
     this.loadReception();
     $('#modal-deliver_turn').modal();
     break;
   default:
 }
}

displayOptions() {
 this.seeOnSalesClient = false;
 this.seeOnOrdinarySales = false;
 this.seeOnCreateReception = false;
 this.seeOnCreateRoom = false;
 this.seeOnCreateProduct = false;
 this.seeOnUpdateReception = false;
 this.seeOnupdateProduct = false;
 this.seeOnUpdateRoom = false;
 this.seeOnRegistryClient = false;
 this.seeOnRoomAvailable = false;
 this.seeOnRoomBusy = false;
 this.seeOnUser = false;
 this.seeOnSectionProduct = false;
 this.seeonReport = false;
 this.seeOnReportSales = false;
}

receivedClient(event: ClientIn) {
 this.clientInp = event;
 this.displayOptions();
 this.seeOnRegistryClient = true;
}

changePage(event) {
 this[`${event.route}`] = false;
 this[`${event.destinyRoute}`] = true;
 this.clientInp = null;
}

loadUser() {
 this.user = JSON.parse(localStorage.getItem('user'));
 if (this.user == null) {
   // this.router.navigate(['']);
 }
}

logout() {
 localStorage.clear();
 this.router.navigate(['']);
}

// cargar el saldo base del recepcionista.
loadBalance() {
 this.balanceCurrent = 0;
 this._balance.getBalance().subscribe((data: any) => {
   if (data.state) {
     for (const i of data.balance) {
       this.balanceCurrent = parseInt(this.balanceCurrent) + parseInt(i.balance_current);
     }
   }
 }, err => console.error(err));
}

loadReceptionById() {
 if (this.user != null) {
   this._user.queryReceptionByIdTypeUser(this.user.id).subscribe((data: any) => {
     this.idReceptionUser = this.user.id;
   });
 }
}

loadReception() {
 this.reception = [];
 this._user.queryAllReception().subscribe((data: any) => {
   if (data != null) {
     for (const i of data) {
       if (i.id_type_user !== this.user.id) {
         this.reception.push(i);
       }
     }
   }
 }, err => console.error(err));
}

enterBalance() {
 if (this.balance == null || this.balance == 0) {
   Swal.fire({
     title: 'Error',
     text: 'El saldo a ingresar no puede ser 0',
     icon: 'warning',
     confirmButtonText: 'Aceptar'
   });
 } else {
   this._balance.insertBalance({
     balance_current: Number(this.balance),
     id_user: Number(this.user.id),
     id_reception: Number(this.idReception),
     registration_date: new Date().getTime()
   })
     .then(data => {
       this.idReception = 0;
       Swal.fire({
         title: 'Exito',
         text: 'El saldo base se ah ingresado correctamente.',
         icon: 'success',
         confirmButtonText: 'Aceptar'
       });
       $('#modal-create-base-balance').modal('close');
     }).catch(e => console.error('Error'));
 }
}

selectReception(event) {
 this.idReception = event.target.value;
}

withDrawBaseBalance() {
 this._balance.updateBalance({
   id_reception: Number(this.idReception),
   balance_current: Number(this.balanceWithdraw)
 }).then((data: any) => {
   if (data.state) {
     $('#modal-update-base-balance').modal('close');
     this.idReception = 0;
     Swal.fire({
       title: 'Exito',
       text: 'El retiro se ah efectuado con exito.',
       icon: 'success',
       confirmButtonText: 'Aceptar'
     });
   } else {
     Swal.fire({
       title: 'Error',
       text: 'El saldo a retirar es mayor al saldo base.',
       icon: 'warning',
       confirmButtonText: 'Aceptar'
     });
   }
 }, err => console.error('error:', err));
}

sendMessageSuperToSuperUser() {
 if (typeof this.message != 'undefined') {
   if (this.message != '') {
     this._user.sendMessageForSuperUser(this.message)
       .then((data: any) => {
         if (data.state) {
           Swal.fire({
             title: 'Mensaje enviado',
             text: 'El mensaje se ha enviado correctamente al super usuario.',
             icon: 'success',
             confirmButtonText: 'Aceptar'
           });
           this.message = '';
         } else {
           Swal.fire({
             title: 'Error',
             text: 'Error al enviar mensaje, por favor verifica tu provedor de servicio.',
             icon: 'warning',
             confirmButtonText: 'Aceptar'
           });
         }
         $('#modal-super-root').modal('close');
       }).catch(e => console.log('err:', e));
   }
 }
}

setBalance(event: number) {
 this.balanceCurrent = event;
}

deliverTurn() {
 this._user.deliverTurn(this.idReception, this.balanceCurrent).subscribe(data=>{
   Swal.fire({
     title: 'turno entregado',
     text: 'El turno se ah entregado correctamente.',
     icon: 'success',
     confirmButtonText: 'Aceptar'
   });
   localStorage.clear();
   this.router.navigate(['']);
 });
}
}
