import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductIn} from '../interfaces/productIn';
import {RoomService} from '../services/room.service';
import {RoomIn} from '../interfaces/roomIn';
import Swal from 'sweetalert2';
import {UserServices} from '../services/user.services';

declare var $;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  height: number;
  public listProd: any[];
  public listRoom: any[];
  public listprod: ProductIn[];
  public product: any;
  public quantity: number;
  private idRoom: number;
  private idReceptionUser;

  @Input() idReception: number;
  @Output() balance: EventEmitter<number>;

  constructor(
    private readonly _product: ProductService,
    private readonly _user: UserServices,
    private readonly _room: RoomService) {
    this.height = window.innerHeight;
    this.balance = new EventEmitter<number>();
    this.listProd = [];
    this.product = {
      title: null,
      description: null,
      date_expire: null,
      price: null,
      id_category: null,
      registration_date: null
    };
    this.quantity = 1;
    this.idReceptionUser = 0;
  }

  ngOnInit(): void {
    this.idRoom = 0;
    this.listProduct();
    this.listRooms();
  }

  listProduct() {
    this._product.queryListProduct().subscribe((data: any) => {
      this.listProd = [];
      this.listProd = data;
    });
  }

  listRooms() {
    this._room.queryListStateRooms(1).subscribe((data: any) => {
      this.listRoom = data;
    });
  }

  searchProduct(event) {
    if (this.listRoom.length > 0 && event.target.value != '') {
      this._product.querylikeProduct(event.target.value).subscribe((data: any) => {
        this.listProd = data;
      });
    }

  }

  selectProduct(i: ProductIn) {
    $('#modal-shopping-product').modal();
    this.product = i;
    this.quantity = 1;
  }

  add(event) {
    const id = event.target.id;
    if (id == 'add') {
      this.quantity++;
    } else if (id == 'remove') {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }

  }

  tosell() {
    if (this.idRoom != 0) {
      this._product.querySales({
        quantity: this.quantity,
        id_product: this.product.id,
        room: this.idRoom,
        type: 1,
        id_reception: this.idReception
      }).then((data: any) => {
        if (data.state) {
          this.balance.emit(data.balance);
          this.quantity = 1;
          this.listProduct();
          $('#modal-shopping-product').modal('close');
          Swal.fire({
            title: 'Producto vendido',
            text: 'El producto se ha vendido correctamente a este cliente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    }else{
      $('#modal-shopping-product').modal('close');
      Swal.fire({
        title: 'Venta fallida',
        text: 'Por favor selecciona la habitación',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  selectRoom(event) {
    this.idRoom = event.target.value;
  }

}
