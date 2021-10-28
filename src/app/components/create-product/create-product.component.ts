import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {CategoryIn} from '../../core/interfaces/categoryIn';
import {FormBuilder, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
import {Constantes} from '../../commons/constantes';

declare var $;

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public formProduct: FormGroup;
  public categories: CategoryIn[];
  private dateExpire: string;

  constructor(private readonly _product: ProductService, private readonly _form: FormBuilder) {
  }

  ngOnInit(): void {
    this.materializeInit();
    this.createForm();
    this.listCategory();
  }

  createForm() {
    this.formProduct = this._form.group({
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

  createProduct() {
    this.formProduct.value.date_expire = this.dateExpire;
    this.formProduct.value.id_category = Number(this.formProduct.value.id_category);
    this.formProduct.value.title = this.formProduct.value.title.toLowerCase();
    if (this.validateForm(this.formProduct)) {
      this._product.createProduct(this.formProduct.value).then((data: any) => {
        if(data.state){
          Swal.fire({
            title: 'Producto creado',
            text: 'El Produto se ha creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        }else{
          Swal.fire({
            title: 'Error',
            text: 'El Produto ya existe',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
        }
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

  dateOf(event) {
    this.dateExpire = event.target.value;
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
}
