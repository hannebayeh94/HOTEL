import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-create-section-product',
  templateUrl: './create-section-product.component.html',
  styleUrls: ['./create-section-product.component.css']
})
export class CreateSectionProductComponent implements OnInit {
  section: string;

  constructor(private readonly _product: ProductService) {
  }

  ngOnInit(): void {
  }

  createSection() {
    if (typeof this.section != 'undefined') {
      if (this.section != '') {
        this._product.createCategory(this.section).subscribe((data: any) =>{

          if(typeof data.err != 'undefined'){
            Swal.fire({
              title: 'Error',
              text: data.err,
              icon: 'warning',
              confirmButtonText: 'Aceptar'
            });
            return;
          }

          if(data){
            Swal.fire({
              title: 'Categoria creada',
              text: 'Categoria creada correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          }else{
            Swal.fire({
              title: 'Error',
              text: 'El al crear la categoria, comprueba la conexión',
              icon: 'warning',
              confirmButtonText: 'Aceptar'
            });
          }
        })
      } else {
        Swal.fire({
          title: 'Error de campo vacio',
          text: 'El campo de sección es necesario',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      }
    } else {
      Swal.fire({
        title: 'Error de campo vacio',
        text: 'El campo de sección es necesario',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }

}
