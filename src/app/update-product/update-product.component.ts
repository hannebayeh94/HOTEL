import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryIn} from '../interfaces/categoryIn';
import {ProductService} from '../services/product.service';
import Swal from "sweetalert2";
import {Constantes} from '../commons/constantes';
import {ProductIn} from '../interfaces/productIn';
declare var $;

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public formProduct: FormGroup;
  public categories: CategoryIn[];
  public listProduct: ProductI[];
  private idProduct: number;

  constructor(private readonly _product: ProductService, private readonly _form: FormBuilder) {
    this.listProduct = [];
    this.idProduct = 0;
  }

  ngOnInit(): void {
    this.materializeInit();
    this.createForm();
    this.listCategory();
  }

  createForm() {
    this.formProduct = this._form.group({
      id: [0],
      title: [''],
      description: [''],
      date_expire: [''],
      price: [''],
      id_category: [''],
      registration_date: [new Date().getTime()]
    });
  }

  listCategory() {
    this._product.queryListCategory().subscribe((data: any) => {
      if (data.list != null) {
        this.categories = [];
        this.categories = data.list;
      }
    });
  }

  updateProduct() {
    this.formProduct.value.id_category = Number(this.formProduct.value.id_category);
    this.formProduct.value.title = this.formProduct.value.title.toLowerCase();
    if (this.validateForm(this.formProduct)) {
      this._product.updateProduct(this.formProduct.value).then((data: any) => {
          Swal.fire({
            title: 'Producto actualizado',
            text: 'El Produto se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
      }).catch(e=>{
        Swal.fire({
          title: 'Error',
          text: 'El Produto ya existe',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }

  materializeInit() {
    $('.datepicker').datepicker({
      format: 'dd-mmmm-yyyy',
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

  validateForm(field) {

    let value = true;

    if (field.value.id_category == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La categoria del producto es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } else if (field.value.title == '') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'El titulo del producto es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    }
    /*
    else if (typeof field.value.date_expire == 'undefined') {
      Swal.fire({
        title: Constantes.FIELD_CREATE_USER.errorVoidField,
        text: 'La fecha de expiración es necesaria',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      value = false;
    } */
    else if (field.value.price == '') {
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

  selectCategory(event) {
    this.formProduct.controls['id_category'].setValue(event.target.value);
    this._product.getProductByIdCategory(event.target.value).subscribe((data: any)=>{
      this.listProduct = data;
    });
  }

  selectProduct(event) {
    this.idProduct = event.target.value;
    this.formProduct.controls['id'].setValue(this.idProduct);
    this._product.queryProductById(this.idProduct).subscribe((data:ProductIn)=> {

      this.formProduct.controls['title'].setValue(data.title.toLowerCase());
      this.formProduct.controls['description'].setValue(data.description);
      this.formProduct.controls['date_expire'].setValue(data.date_expire);
      this.formProduct.controls['price'].setValue(data.price);

    });
  }
}

export interface ProductI{
  id: number;
  title: string;
  description: string;
  date_expire: string;
  price: number;
  id_category: number;
  registration_date: string;
}

