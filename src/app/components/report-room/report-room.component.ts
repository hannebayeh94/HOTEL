import * as moment from 'moment';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Materialize} from '../../core/class/materialize';
import {RoomService} from '../../core/services/room.service';
import {RoomReportIn} from '../../core/interfaces/roomreportIn';

@Component({
  selector: 'app-report-room',
  templateUrl: './report-room.component.html',
  styleUrls: ['./report-room.component.css']
})
export class ReportRoomComponent implements OnInit {
  formGroupReportRoom: FormGroup;

  private sinceDate: string;
  private untilDate: string;
  public reportArray: RoomReportIn[];

  constructor(private readonly _form: FormBuilder, private readonly _room: RoomService) {
    this.reportArray = [];
  }

  ngOnInit(): void {
    Materialize.datepickerInit('mm/dd/yyyy');
    this.createForm();
  }

  createForm() {

    this.sinceDate = null;
    this.untilDate = null;

    this.formGroupReportRoom = this._form.group({
      since: [''],
      until: [''],
      state: [false]
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
    this.formGroupReportRoom.value.since = this.sinceDate;
    this.formGroupReportRoom.value.until = this.untilDate;
    this._room.report(this.formGroupReportRoom.value)
      .then((data: any) => data.state?this.reportArray = data.accommodate: []).catch(e => console.error('Error al consultar el reporte, por favor verifica tu conexión a internet.'));
  }
}
