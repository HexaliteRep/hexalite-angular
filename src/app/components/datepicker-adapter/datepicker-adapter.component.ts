import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}

@Component({
  selector: 'app-datepicker-adapter',
  templateUrl: './datepicker-adapter.component.html',
  styleUrls: ['./datepicker-adapter.component.scss'],

  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class DatepickerAdapterComponent {

  @Input() date: Date;
  @Output()
 change: EventEmitter<Date> = new EventEmitter<Date>();

  get today() {
    return new Date();
  }

  setDate($event) {
    this.change.emit(this.date);
  }
}
