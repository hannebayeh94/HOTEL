import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constantes} from '../commons/constantes';
import {ProductIn} from '../interfaces/productIn';
import {RoomIn} from '../interfaces/roomIn';

@Injectable()
export class ProductService {

  private header: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  createCategory(category: string) {
    return this.http.get(`${Constantes.url}product/create-category/${category}`, {headers: this.header});
  }

  queryListCategory() {
    return this.http.get(`${Constantes.url}product/getCategory`, {headers: this.header});
  }

  createProduct(product: ProductIn) {
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}product`, JSON.stringify(product), {headers: this.header})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  createRoom(room: RoomIn) {
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}room/create-room`, JSON.stringify(room), {headers: this.header})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  queryListProduct() {
    return this.http.get(`${Constantes.url}product/list-product`, {headers: this.header});
  }

  querylikeProduct(search: string) {
    return this.http.get(`${Constantes.url}product/like-product/${search}`, {headers: this.header});
  }

  querySales(product: any) {
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}product/onSalesProduct`, JSON.stringify(product), {headers: this.header})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  report(date: object){
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}product/report-sales`, JSON.stringify(date), {headers: this.header})
        .subscribe(data=>resolve(data), err=>reject(err));
    });
  }

  getProductByIdCategory(idCategory: number){
    return this.http.get(`${Constantes.url}product/get-product-id-category/${idCategory}`, {headers: this.header});
  }

  updateProduct(product: ProductIn){
    return new Promise((resolve, reject) => {
      this.http.post(`${Constantes.url}product/update`, JSON.stringify(product), {headers: this.header})
        .subscribe(data => resolve(data), err => reject(err));
    });
  }

  queryProductById(id:number){
    return this.http.get(`${Constantes.url}product/get-product-id/${id}`, {headers: this.header});
  }

}
