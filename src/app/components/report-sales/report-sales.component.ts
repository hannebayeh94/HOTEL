import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import {RoomReportIn} from '../../core/interfaces/roomreportIn';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Materialize} from '../../core/class/materialize';
import {ProductService} from '../../core/services/product.service';
import {SalesreportIn} from '../../core/interfaces/salesreportIn';

@Component({
  selector: 'app-report-sales',
  templateUrl: './report-sales.component.html',
  styleUrls: ['./report-sales.component.css']
})
export class ReportSalesComponent implements OnInit {

  formReportSales: FormGroup;

  private sinceDate: string;
  private untilDate: string;
  public reportArray: SalesreportIn[];

  constructor(private readonly _form: FormBuilder, private readonly _product: ProductService) {
    this.reportArray = [];
  }

  ngOnInit(): void {
    Materialize.datepickerInit('mm/dd/yyyy');
    this.createForm();
  }

  createForm() {

    this.sinceDate = null;
    this.untilDate = null;

    this.formReportSales = this._form.group({
      since: [''],
      until: [''],
      state: [true]
    });

  }

  setDate(event) {
    switch (event.target.id) {
      case 'since-date':
        this.sinceDate = event.target.value;
        break;
      case 'until-date':
        this.untilDate = event.target.value;
        break;
      default:
    }
  }

  send() {
    this.formReportSales.value.since = this.sinceDate;
    this.formReportSales.value.until = this.untilDate;
    this._product.report(this.formReportSales.value)
      .then((data: any) => data.state?this.reportArray=data.reports:[]).catch(e => console.error('Error al consultar el reporte, por favor verifica tu conexión a internet.'));
  }
}
