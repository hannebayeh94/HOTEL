import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductIn} from '../interfaces/productIn';
import Swal from "sweetalert2";
declare var $;

@Component({
  selector: 'app-ordinary-sales',
  templateUrl: './ordinary-sales.component.html',
  styleUrls: ['./ordinary-sales.component.css']
})
export class OrdinarySalesComponent implements OnInit {
  height: number;
  public listProd: any[];
  public product: any;
  quantity: number;

  @Input() idReception: number;
  @Output() balance: EventEmitter<number>;

  constructor(private readonly _product: ProductService) {
    this.balance = new EventEmitter<number>();
    this.product = {
      title : null,
      price: null
    }
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.listProduct();
  }

  listProduct() {
    this._product.queryListProduct().subscribe((data: any) => {
      this.listProd = data;
    });
  }

  selectProduct(i: ProductIn) {
    $('#modal-shopping-product').modal();
    this.product = i;
    this.quantity = 1;
  }

  searchProduct(event) {
    if (event.target.value != '') {
      this._product.querylikeProduct(event.target.value).subscribe((data: any) => {
        this.listProd = [];
        this.listProd = data;
      });
    }

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
    this._product.querySales({
      quantity: this.quantity,
      id_product: this.product.id,
      room: null,
      type: 2,
      id_reception: this.idReception
    }).then((data: any) => {
      if(data.state){
        this.balance.emit(data.balance);
        this.quantity = 1;
        this.listProduct();
        $('#modal-shopping-product').modal('close');
        Swal.fire({
          title: 'Producto vendido',
          text: 'El producto se ha vendido correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }


}
